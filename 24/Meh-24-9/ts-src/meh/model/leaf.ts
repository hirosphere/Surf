import { _value_, _set_, _refs_ } from "../common.js";

export class Leaf < V >
{
	constructor
	(
		value : V,
	)
	{
		this[ _value_ ] = value;
	}

	public [ _refs_ ] = new Set < Leaf.Ref < V > >;

	public [ _value_ ] : V ;

	public get value() : V
	{
		return this[ _value_ ];
	}

	public set value( value : V )
	{
		this[ _set_ ] ( value );
	}

	public [ _set_ ] ( new_value : V )
	{
		if( new_value === this[ _value_ ] )  return;

		const old_value = this[ _value_ ];
		this[ _value_ ] = new_value;

		this[ _refs_ ].forEach
		(
			ref => ref.on_value_change
			(
				new_value,
				old_value
			)
		);
	}
}

export class Leafr < V > extends Leaf < V >
{
	public override get value() : V
	{
		return this[ _value_ ];
	}
}

export namespace Leaf
{
	export class Ref < V >
	{
		public set src( src : Leaf < V> )
		{
			if( src == this._src_ )  return;

			this._src_?.[ _refs_ ].delete( this );
			this._src_ = src;
			src?.[ _refs_ ].add( this );
			this.on_value_change( src?.[ _value_ ] );
		}

		protected _src_ ? : Leaf < V >;

		public on_value_change
		(
			new_value ? : V,
			old_value ? : V
		) {}
	}
}

