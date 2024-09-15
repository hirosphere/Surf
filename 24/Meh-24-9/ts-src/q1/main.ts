import { model, Leafr, log } from "../meh/index.js";

console.log( "Surf Meh-24-9 q1" );

const lf1 = new Leafr < string > ( "zz" );
const r1 = new Leafr.Ref;

r1.on_value_change = ( n, o ) =>
{
	log( n, o );
};

r1.src = lf1;
lf1.value = "tokorojava";
lf1.value = "illumasci";

lf1.value;
