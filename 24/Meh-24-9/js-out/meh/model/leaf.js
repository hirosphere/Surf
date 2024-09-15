import { _value_, _set_, _refs_ } from "../common.js";
export class Leaf {
    constructor(value) {
        this[_value_] = value;
    }
    [_refs_] = new Set;
    [_value_];
    get value() {
        return this[_value_];
    }
    set value(value) {
        this[_set_](value);
    }
    [_set_](new_value) {
        if (new_value === this[_value_])
            return;
        const old_value = this[_value_];
        this[_value_] = new_value;
        this[_refs_].forEach(ref => ref.on_value_change(new_value, old_value));
    }
}
export class Leafr extends Leaf {
    get value() {
        return this[_value_];
    }
}
(function (Leaf) {
    class Ref {
        set src(src) {
            if (src == this._src_)
                return;
            this._src_?.[_refs_].delete(this);
            this._src_ = src;
            src?.[_refs_].add(this);
            this.on_value_change(src?.[_value_]);
        }
        _src_;
        on_value_change(new_value, old_value) { }
    }
    Leaf.Ref = Ref;
})(Leaf || (Leaf = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RzLXNyYy9tZWgvbW9kZWwvbGVhZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdEQsTUFBTSxPQUFPLElBQUk7SUFFaEIsWUFFQyxLQUFTO1FBR1QsSUFBSSxDQUFFLE9BQU8sQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRU0sQ0FBRSxNQUFNLENBQUUsR0FBRyxJQUFJLEdBQXNCLENBQUM7SUFFeEMsQ0FBRSxPQUFPLENBQUUsQ0FBTTtJQUV4QixJQUFXLEtBQUs7UUFFZixPQUFPLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxLQUFLLENBQUUsS0FBUztRQUUxQixJQUFJLENBQUUsS0FBSyxDQUFFLENBQUcsS0FBSyxDQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLENBQUUsS0FBSyxDQUFFLENBQUcsU0FBYTtRQUUvQixJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUUsT0FBTyxDQUFFO1lBQUksT0FBTztRQUU1QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFFLE9BQU8sQ0FBRSxHQUFHLFNBQVMsQ0FBQztRQUU1QixJQUFJLENBQUUsTUFBTSxDQUFFLENBQUMsT0FBTyxDQUVyQixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBRXpCLFNBQVMsRUFDVCxTQUFTLENBQ1QsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztDQUNEO0FBRUQsTUFBTSxPQUFPLEtBQVksU0FBUSxJQUFVO0lBRTFDLElBQW9CLEtBQUs7UUFFeEIsT0FBTyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNEO0FBRUQsV0FBaUIsSUFBSTtJQUVwQixNQUFhLEdBQUc7UUFFZixJQUFXLEdBQUcsQ0FBRSxHQUFlO1lBRTlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLO2dCQUFJLE9BQU87WUFFaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFFLE1BQU0sQ0FBRSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixHQUFHLEVBQUUsQ0FBRSxNQUFNLENBQUUsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxPQUFPLENBQUUsQ0FBRSxDQUFDO1FBQzFDLENBQUM7UUFFUyxLQUFLLENBQWdCO1FBRXhCLGVBQWUsQ0FFckIsU0FBZSxFQUNmLFNBQWUsSUFDYixDQUFDO0tBQ0o7SUFuQlksUUFBRyxNQW1CZixDQUFBO0FBQ0YsQ0FBQyxFQXRCZ0IsSUFBSSxLQUFKLElBQUksUUFzQnBCIn0=