(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#0085C2",
	manifest: []
};



// symbols:



(lib.DellLogo3DWhitePNG = function() {
	this.spriteSheet = ss["ulmart_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image10 = function() {
	this.spriteSheet = ss["ulmart_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image17 = function() {
	this.spriteSheet = ss["ulmart_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image27 = function() {
	this.spriteSheet = ss["ulmart_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.DellLogo3DWhitePNG();
	this.instance.setTransform(0,0,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.1,76.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBBQAKgQADgRQAEgSgBgPQABgRgEgQQgDgPgKgPIAKAAQAIAOAEAQQAFAPgBASQABAQgFATQgFARgHAOg");
	this.shape.setTransform(162.4,223.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA5IgKgEIAFgKIAGADIAKABQAJAAAEgEQAHgDAEgHQAGgHACgIQADgHABgJIgBAAQgFAGgHAEQgIADgHAAQgKAAgIgEQgHgFgFgGQgFgIABgLQAAgMAEgIQAFgJAIgEQAIgFAKAAQAKAAAJAHQAJAHAFAMQAGAMAAAPQAAAJgDALQgEALgFAJQgGAKgKAGQgJAGgLAAIgLgBgAgOgrQgGAEgDAGQgCAGAAAIQAAAMAHAHQAGAFAMAAQAGAAAGgDQAGgCAEgDQAEgEAAgFQAAgGgDgGQgCgGgDgFQgEgFgFgDQgGgDgEAAQgIAAgFADg");
	this.shape_1.setTransform(155.5,222.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA1QgJgEgFgIIAHgIIAFAGQAEADAFACIALACQAGAAAHgDQAFgEAEgGQAEgGAAgHQAAgIgEgGQgDgGgHgBQgGgEgHAAIgKACIgKADIgHgBIAGg3IA1AAIAAAKIgrAAIgDAdIgBAFIgBABIABAAIAHgCIAKgCQAJAAAJAFQAJAFAEAGQAFAJABAKQgBAKgFAJQgFAIgIAFQgKAFgJAAQgJAAgJgEg");
	this.shape_2.setTransform(146.4,222.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA1QgJgEgFgIIAHgIIAFAGQAEADAFACIALACQAGAAAGgDQAGgEAEgGQAEgGAAgHQAAgIgEgGQgDgGgHgBQgGgEgHAAIgKACIgKADIgHgBIAGg3IA0AAIAAAKIgqAAIgDAdIgBAFIAAABIAAAAIAHgCIAKgCQAKAAAIAFQAJAFAEAGQAGAJAAAKQAAAKgGAJQgFAIgIAFQgKAFgJAAQgJAAgJgEg");
	this.shape_3.setTransform(137.5,222.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA4IArhaIAEgIIACgDIAAAAIgCAAIgGAAIgzAAIAAgKIBHAAIAAAIIgyBng");
	this.shape_4.setTransform(129,222.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADBBQgGgOgFgRQgFgTABgQQgBgSAFgPQAEgQAHgOIALAAQgKAPgEAPQgDAQABARQgBAPADASQAEARAKAQg");
	this.shape_5.setTransform(122.5,223.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA1QgIgEgHgIIAIgIIAGAGQADADAFACIALACQAGAAAGgDQAHgEADgGQAEgGAAgHQAAgIgEgGQgEgGgGgBQgGgEgGAAIgLACIgKADIgHgBIAGg3IA0AAIAAAKIgqAAIgEAdIAAAFIAAABIAAAAIAHgCIAKgCQAJAAAJAFQAIAFAGAGQAEAJAAAKQAAAKgEAJQgGAIgIAFQgKAFgIAAQgKAAgJgEg");
	this.shape_6.setTransform(111.7,222.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdA4IAAgKIAZAAIAAhRIAAgEIAAgCIAAAAIgBACIgFAFIgMAMIgHgHIAagaIAIAAIAABlIAZAAIAAAKg");
	this.shape_7.setTransform(103.7,222.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYApIAAgvIgBgLQgCgGgEgDQgDgDgIAAQgGAAgIAEQgGAEgEAIQgEAHgBAHIAAAoIgLAAIAAhPIALAAIAAANIAAAEIgBACIABAAQACgEADgEQAEgFAHgEQAHgEAHAAQAPAAAGAIQAHAJAAAPIAAAxg");
	this.shape_8.setTransform(91,224.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgGgKQgGgKAAgLQAAgLAGgJQAGgKAJgFQAJgGALAAQALAAAKAGQAJAFAGAKQAGAJAAALQAAALgGAKQgGAKgJAFQgKAGgLAAQgLAAgJgGgAgPgbQgGAFgFAHQgEAHAAAIQAAAJAEAHQAFAHAGAEQAIAFAHAAQAIAAAHgFQAIgEADgHQAFgHAAgJQAAgIgFgHQgDgHgIgFQgHgEgIAAQgHAAgIAEg");
	this.shape_9.setTransform(81.2,224.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAoIAAhPIALAAIAAAQIAAAEIgBACIABAAQACgGADgGQADgEAEgDQAFgDAGAAIADAAIACAAIAAALIgCgBIgCAAQgHABgFADQgEAEgCAFQgDAFgBAHIgCAKIAAAig");
	this.shape_10.setTransform(73.8,224.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEA4IAAhPIAJAAIAABPgAgFgpIAAgOIAKAAIAAAOg");
	this.shape_11.setTransform(68.7,222.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA5IAAhvIAKAAIAAAJIAAAEIAAACQAEgIAHgEQAHgFAIAAQALAAAIAGQAIAFAEAJQAEAKAAAMQAAANgFAIQgEAJgIAFQgIAGgLAAQgHAAgHgFQgHgEgEgHIAAACIABAFIAAAngAgLgqQgGADgEAHQgEAHAAAMQAAAIADAFQADAIAGAEQAGAFAHAAQAGAAAGgEQAGgEADgHQAEgFAAgKQAAgPgHgJQgHgJgLAAQgFAAgGAEg");
	this.shape_12.setTransform(62.4,225.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAnQgIgDgGgGIAGgIQAEAFAHADQAHACAEAAQAHAAAFgDQAEgDAAgHQAAgFgEgDQgFgEgGgCIgLgFQgGgBgEgFQgFgEABgIQAAgIADgFQAEgFAGgCQAGgDAGAAQAGAAAHACQAGACAFAFIgEAIQgFgDgFgCQgGgCgFAAIgGABQgDACgDACQgCADAAAEQAAAGAEADIAJAGIANAEQAHACADAEQAFAFAAAIQAAAHgEAFQgDAFgGADQgGADgIAAQgHAAgHgDg");
	this.shape_13.setTransform(53.9,224.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXApIAAgvIgBgLQgBgGgDgDQgFgDgHAAQgHAAgGAEQgIAEgDAIQgFAHAAAHIAAAoIgKAAIAAhPIAKAAIAAANIAAAEIAAACIAAAAQABgEAFgEQAEgFAGgEQAHgEAIAAQAOAAAGAIQAGAJABAPIAAAxg");
	this.shape_14.setTransform(45.7,224.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEA4IAAhvIAJAAIAABvg");
	this.shape_15.setTransform(38.7,222.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAA3QgDgCgDgEQgEgEAAgJIAAhbIAKAAIAABZQAAAFABADQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABAAIACAAIAAAKIgCAAIgCAAIgCAAIgFgBg");
	this.shape_16.setTransform(31,222.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAA3QgDgCgDgEQgEgEAAgJIAAhbIAKAAIAABZQAAAFABADQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABAAIACAAIAAAKIgCAAIgCAAIgCAAIgFgBg");
	this.shape_17.setTransform(27.1,222.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAkQgJgFgGgJQgFgKAAgMQAAgMAFgJQAGgKAJgFQAJgFAJAAQALAAAHAFQAIAGADAIQAEAIAAAKIAAADIAAABIg8AAQAAAKAFAHQAEAHAHAEQAHAEAGAAQAHAAAGgDQAHgCAFgFIAFAJQgGAFgIADQgIADgIAAQgKAAgKgGgAAZgHQAAgIgDgGQgEgFgFgDQgFgDgGAAQgFAAgFADQgGADgEAGQgEAFgBAIIAwAAIAAAAg");
	this.shape_18.setTransform(20.2,224.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtA4IAAhvIAlAAQAPAAAMAHQAMAHAHAMQAIANAAAQQAAARgIANQgHAMgMAHQgMAHgPAAgAgiAuIAYAAQAMAAAKgFQALgGAFgKQAGgKABgPQgBgOgGgKQgFgKgLgGQgKgFgMAAIgYAAg");
	this.shape_19.setTransform(10.3,222.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAJIAAgSIARAAIAAASg");
	this.shape_20.setTransform(159.8,48.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAjA8IAAhOIAAgHIAAgHIAAgDIAAAAIgCADIgFAHIgFAHIg6BOIgPAAIAAh3IAQAAIAABNIgBAIIAAAHIAAADIAAAAIADgDIAFgHIAFgIIA5hNIAQAAIAAB3g");
	this.shape_21.setTransform(150,43.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHA8IAAhpIgsAAIAAgOIBnAAIAAAOIgtAAIAABpg");
	this.shape_22.setTransform(137.1,43.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWA3QgPgIgJgOQgHgPgBgSQAAgRAJgOQAIgPAPgIQAOgIAPAAQAMAAANAEQAMAFAHAIIgIANQgGgHgKgEQgIgEgLAAQgLAAgLAGQgLAGgFALQgHALAAANQAAAOAHALQAFAKALAHQALAGALAAQALAAALgFQAKgEAHgIIAHAMQgHAJgNAGQgNAFgOAAQgPAAgOgIg");
	this.shape_23.setTransform(125,43.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfA2QgOgIgJgOQgIgPAAgRQAAgRAIgOQAJgOAOgJQAOgIARAAQARAAAOAIQAPAJAIAOQAJAOAAARQAAARgJAPQgIAOgPAIQgOAIgRABQgRgBgOgIgAgXgpQgKAGgGALQgHALAAANQAAANAHALQAGALAKAGQALAHAMAAQAMAAALgHQAKgGAHgLQAGgLAAgNQAAgNgGgLQgHgLgKgGQgLgGgMAAQgMAAgLAGg");
	this.shape_24.setTransform(110.8,43.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAjA8IAAg3IhFAAIAAA3IgQAAIAAh3IAQAAIAAA0IBFAAIAAg0IAQAAIAAB3g");
	this.shape_25.setTransform(96.2,43.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA+A8Igjg3IgUAAIAAA3IgOAAIAAg3IgTAAIgjA3IgTAAIAog8Iglg7IASAAIAhA0IATAAIAAg0IAOAAIAAA0IAUAAIAgg0IASAAIglA7IApA8g");
	this.shape_26.setTransform(80.5,43.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfA2QgOgIgJgOQgIgPAAgRQAAgRAIgOQAJgOAOgJQAOgIARAAQARAAAOAIQAPAJAIAOQAJAOAAARQAAARgJAPQgIAOgPAIQgOAIgRABQgRgBgOgIgAgXgpQgKAGgGALQgHALAAANQAAANAHALQAGALAKAGQALAHAMAAQAMAAALgHQAKgGAHgLQAGgLAAgNQAAgNgGgLQgHgLgKgGQgLgGgMAAQgMAAgLAGg");
	this.shape_27.setTransform(64.3,43.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA3A8IgHhMIAAgIIAAgJIAAgEIAAAAIgCAFIgGAMIghBCIgNAAIgihBIgFgNIgDgFIAAAAIAAAEIAAAJIAAAIIgGBMIgPAAIAJh3IASAAIAkBIIADAIIADAHIAAACIAAAAIABgCIACgHIAEgIIAkhIIARAAIAKB3g");
	this.shape_28.setTransform(48.2,43.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZA5QgKgFgHgHIAJgLIAHAGIALAGQAGADAIAAQAGAAAGgDQAHgCAEgGQAEgFAAgIQAAgKgHgGQgIgFgMAAIgPAAIAAgLIANAAQAKAAAHgFQAIgFAAgLQAAgKgHgFQgHgFgJAAQgJAAgHADQgIADgGAFIgHgMQAGgFAKgEQAKgEAMAAQALAAAIAEQAJADAFAIQAFAHABALQgBALgFAHQgFAGgIADIAAABQAKABAGAGQAHAIAAAMQAAAMgHAIQgGAIgKAFQgKAEgKAAQgOgBgLgFg");
	this.shape_29.setTransform(34.1,43.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfA2QgOgIgJgOQgIgPAAgRQAAgRAIgOQAJgOAOgJQAOgIARAAQARAAAOAIQAPAJAIAOQAJAOAAARQAAARgJAPQgIAOgPAIQgOAIgRABQgRgBgOgIgAgXgpQgKAGgGALQgHALAAANQAAANAHALQAGALAKAGQALAHAMAAQAMAAALgHQAKgGAHgLQAGgLAAgNQAAgNgGgLQgHgLgKgGQgLgGgMAAQgMAAgLAGg");
	this.shape_30.setTransform(21.6,43.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgrA8IAAh3IArAAQARAAAKAIQALAIAAAPQAAAJgFAHQgEAHgJADIAAABQAMABAGAHQAGAIAAALQAAAQgLAJQgMAJgUAAgAgbAvIAbAAQAOAAAHgGQAHgGAAgJQAAgLgIgGQgIgFgMAAIgbAAgAgbgHIAaAAQAKAAAGgFQAGgFAAgKQAAgKgGgFQgHgFgKAAIgZAAg");
	this.shape_31.setTransform(8.4,43.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXA3QgOgIgJgPQgHgOgBgSQABgSAHgPQAJgOANgHQANgIAPAAQARAAALAIQALAHAGANQAGANAAAPIAAAEIgBACIhbAAQABAPAGALQAHALAKAFQAKAGALAAQAKAAAKgEQAJgEAIgHIAHANQgIAIgNAEQgMAFgMAAQgQAAgOgIgAAmgLQgBgNgFgIQgEgIgIgEQgHgEgJAAQgJAAgIAEQgJAEgGAIQgGAJgCAMIBKAAIAAAAg");
	this.shape_32.setTransform(164.2,18.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAjA8IAAhOIAAgHIABgHIAAgDIgBAAIgCADIgFAHIgFAHIg5BOIgQAAIAAh3IAQAAIAABNIAAAIIAAAHIgBADIABAAIACgDIAEgHIAGgIIA6hNIAPAAIAAB3g");
	this.shape_33.setTransform(150.5,18.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABEBKIAAgdIiXAAIAAh2IAQAAIAABoIA0AAIAAhoIAPAAIAABoIAyAAIAAhoIAQAAIAABoIARAAIAAArg");
	this.shape_34.setTransform(134.3,20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIA3QgNgHgIgNQgIgMgCgRIgZAAIAAA2IgQAAIAAh3IAQAAIAAA1IAZAAQABgQAJgNQAIgMANgHQALgIAQAAQARAAAOAIQAOAJAIAOQAJAOAAARQAAARgJAPQgIAOgOAIQgNAIgSABQgPAAgMgIgAgBgpQgKAGgGALQgGALAAANQAAANAGALQAGALAKAGQAIAHAMAAQANAAAKgHQAKgGAGgLQAGgLAAgNQAAgNgGgLQgGgLgKgGQgKgGgNAAQgMAAgIAGg");
	this.shape_35.setTransform(114.7,18.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAdA8IAAgvIgZAAIgeAvIgSAAIAcgqIAEgFIACgCIAAAAQgHgCgHgEQgGgFgEgFQgEgHAAgKQAAgMAGgJQAFgIAKgEQAJgEALAAIAqAAIAAB3gAgNgpQgIAGAAANQAAAMAIAGQAIAFAKAAIAYAAIAAgwIgXAAQgMAAgHAGg");
	this.shape_36.setTransform(98,18.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgyAuQAPgDAHgRQAHgSAAgfIAAgkIBIAAIAAB2IgRAAIAAhoIgnAAIAAAWQAAApgLAUQgLAVgXABg");
	this.shape_37.setTransform(85.7,18.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHA8IAAhpIgsAAIAAgOIBnAAIAAAOIgtAAIAABpg");
	this.shape_38.setTransform(74.3,18.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgaA7QgKgEgFgIQgGgIAAgMQAAgLAFgIQAGgIAIgDQAIgEAKgCIASgDIAQgBIAIAAIAAgDQAAgRgJgHQgIgHgNAAQgIAAgJADQgIADgHAFIgIgMQAIgGALgEQAMgEAKAAQAVAAAMAMQAMAMAAAXIAABLIgQAAIAAgOIABgIIAAgDIAAAAQgEAIgFAGQgHAGgIAEQgHAEgJAAQgJAAgKgEgAAHAAQgHAAgJACQgKADgFAFQgHAGABAKQAAAGADAFQADAFAFADQAGAEAKAAQAJAAAJgHQAHgHAFgKQAEgKABgLIAAgEIgIAAIgRAAg");
	this.shape_39.setTransform(61.9,18.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAcA8IAAguIAAgFIAAgDIAAAAQgGAEgJADQgKACgGABQgVgBgKgKQgKgIABgSIAAgmIAQAAIAAAlQgBAGACAGQACAGAGADQAGACAMAAQAIAAAIgBIAMgHIAAg0IAQAAIAAB3g");
	this.shape_40.setTransform(49.7,18.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXA3QgOgIgIgPQgJgOABgSQgBgSAJgPQAHgOAOgHQAOgIAOAAQAQAAAMAIQALAHAGANQAGANgBAPIAAAEIAAACIhbAAQABAPAGALQAHALAKAFQALAGAKAAQAKAAAJgEQAKgEAIgHIAHANQgJAIgLAEQgMAFgNAAQgPAAgPgIgAAmgLQgBgNgEgIQgFgIgIgEQgIgEgIAAQgIAAgKAEQgIAEgGAIQgGAJgCAMIBKAAIAAAAg");
	this.shape_41.setTransform(37.5,18.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAhA8IAAhpIhCAAIAABpIgQAAIAAh3IBjAAIAAB3g");
	this.shape_42.setTransform(23.8,18.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag2BUIAAinIA4AAQANAAAKAFQALAFAFAKQAHAJAAAOQAAANgHAJQgFAJgKAFIAAABQAOADAHAKQAIALAAAQQgBAPgGAKQgHALgLAFQgMAGgOAAgAglBFIApAAQAQAAAIgJQAJgJAAgPQAAgPgJgJQgJgJgPAAIgpAAgAglgKIAnAAQANAAAHgIQAIgIABgNQAAgNgJgIQgHgIgNAAIgnAAg");
	this.shape_43.setTransform(10,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,234.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAQAAIAAARg");
	this.shape.setTransform(225.3,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBaQAMgWAGgYQAFgYAAgXQAAgXgFgWQgGgVgMgUIAOAAQAKATAGAWQAHAVAAAYQAAAYgHAZQgHAYgJAUg");
	this.shape_1.setTransform(219.5,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBOIgOgFIAGgNIAKADQAGACAHAAQAMABAHgGQAJgFAHgKQAGgJADgKQAEgLABgMIAAAAQgGAJgLAFQgKAEgKAAQgPAAgKgGQgLgGgGgJQgGgMgBgPQABgQAGgLQAGgMALgGQALgGAOgBQAPABAMAJQANAJAHARQAHAQAAAVQAAANgEAQQgEAPgIANQgJAMgMAIQgNAJgQAAIgPgCgAgUg7QgHAFgEAIQgEAJAAAKQAAARAJAKQAKAIAQAAQAIAAAJgFQAIgDAFgFQAFgGAAgGQAAgIgCgIQgDgIgGgHQgFgHgHgFQgHgEgHAAQgKAAgIAFg");
	this.shape_2.setTransform(210,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBJQgMgGgIgKIAKgLIAHAIQAFAEAHADQAHACAIABQAKgBAIgEQAJgFAFgIQAFgIAAgKQAAgMgFgHQgFgIgJgEQgJgEgJAAQgIAAgHACQgIADgFACIgKgCIAJhLIBIAAIAAANIg7AAIgFAoIAAAHIgBACIABAAIAJgEQAHgCAGAAQAOAAAMAHQAMAHAHAJQAHAMAAAOQAAAOgIAMQgGAKgNAIQgMAGgNAAQgNAAgMgFg");
	this.shape_3.setTransform(197.6,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBJQgMgGgIgKIAKgLIAHAIQAGAEAGADQAHACAIABQAJgBAJgEQAJgFAFgIQAFgIAAgKQAAgMgFgHQgFgIgJgEQgJgEgJAAQgIAAgHACQgHADgHACIgJgCIAIhLIBJAAIAAANIg7AAIgFAoIgBAHIAAACIAAAAIAKgEQAGgCAIAAQAOAAAMAHQALAHAHAJQAHAMAAAOQgBAOgGAMQgIAKgLAIQgMAGgNAAQgOAAgMgFg");
	this.shape_4.setTransform(185.4,37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBNIA9h9IAGgKIACgEIAAgBIgDAAIgIABIhHAAIAAgOIBjAAIAAALIhGCOg");
	this.shape_5.setTransform(173.7,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFBaQgKgUgGgYQgHgZAAgYQAAgYAGgVQAHgWAKgTIAOAAQgMAUgHAVQgEAWAAAXQAAAXAEAYQAGAYANAWg");
	this.shape_6.setTransform(164.8,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBJQgMgGgIgKIAKgLIAIAIQAFAEAGADQAHACAJABQAIgBAJgEQAJgFAFgIQAFgIAAgKQAAgMgFgHQgFgIgJgEQgJgEgJAAQgHAAgIACQgHADgHACIgJgCIAIhLIBJAAIAAANIg7AAIgFAoIgBAHIAAACIAAAAIAKgEQAGgCAIAAQANAAANAHQALAHAHAJQAHAMAAAOQgBAOgGAMQgIAKgLAIQgMAGgNAAQgOAAgMgFg");
	this.shape_7.setTransform(150.1,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBNIAAgOIAjAAIAAhvIAAgGIAAgDIAAAAIgBACIgHAHIgQARIgKgKIAjgjIAMAAIAACLIAjAAIAAAOg");
	this.shape_8.setTransform(139,37.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgA4IAAhAQABgJgCgHQgCgIgFgEQgFgFgKAAQgLAAgJAGQgKAGgFAKQgFAKAAALIAAA2IgQAAIAAhsIAPAAIAAARIAAAGIgBADIABAAQACgGAFgGQAGgHAJgFQAJgFAMAAQAUAAAIALQAJALAAAVIAABEg");
	this.shape_9.setTransform(121.6,39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAyQgNgIgIgNQgIgNAAgQQAAgPAIgOQAIgNANgGQANgIAPAAQAQAAANAIQANAGAIANQAIAOAAAPQAAAQgIANQgIANgNAIQgNAHgQABQgPgBgNgHgAgUglQgKAFgGALQgFAKgBALQABAMAFAKQAGALAKAFQAJAGALAAQALAAAKgGQAKgFAGgLQAFgKABgMQgBgLgFgKQgGgLgKgFQgKgGgLAAQgLAAgJAGg");
	this.shape_10.setTransform(108.1,39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaA3IAAhsIAOAAIAAAUIAAAGIgBADIABAAQADgJAFgGQAEgHAGgEQAHgEAIAAIADAAIADAAIAAAPIgCAAIgDgBQgKABgGAEQgGAFgDAHQgFAIgBAIQgCAHAAAIIAAAvg");
	this.shape_11.setTransform(97.9,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBNIAAhtIANAAIAABtgAgHg5IAAgTIAPAAIAAATg");
	this.shape_12.setTransform(90.8,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBOIAAiYIAOAAIAAALIAAAGIAAADIAAAAQAFgLALgGQAKgGALAAQAPAAALAHQAKAIAGANQAGANAAARQAAASgHALQgGANgLAHQgLAHgPAAQgJAAgKgGQgKgGgFgKIgBAAIABADIAAAHIAAA1gAgQg7QgIAFgFAKQgFAKAAAPQAAAMAEAIQAEAKAIAGQAHAGALABQAJAAAIgGQAIgFAFgKQAFgIAAgOQgBgUgJgMQgKgMgPAAIAAAAQgJAAgHAEg");
	this.shape_13.setTransform(82.2,41.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgJgJIAIgKQAHAGAJAEQAJADAHAAQAJABAHgFQAGgEAAgKQAAgGgGgFQgGgEgJgEIgPgHQgJgCgGgHQgGgGAAgLQAAgJAFgHQAFgIAJgDQAIgDAJAAQAJAAAJACQAJAEAHAGIgHALQgFgFgIgCQgHgDgIAAQgEAAgFACQgFACgDADQgDAEAAAGQAAAHAGAFQAGAFAHADIARAGQAJADAGAGQAGAHAAAKQAAAKgFAGQgFAIgIADQgIAFgLAAQgKgBgLgDg");
	this.shape_14.setTransform(70.4,39.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgA4IAAhAQAAgJgBgHQgCgIgFgEQgFgFgLAAQgKAAgJAGQgJAGgGAKQgGAKABALIAAA2IgPAAIAAhsIAOAAIAAARIAAAGIgBADIABAAQABgGAGgGQAGgHAJgFQAJgFAMAAQAUAAAIALQAJALAAAVIAABEg");
	this.shape_15.setTransform(59.3,39.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGBNIAAiZIANAAIAACZg");
	this.shape_16.setTransform(49.7,37.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAJBNQgEAAgFgCQgFgBgEgGQgFgGAAgMIAAh+IAOAAIAAB7QAAAHABAEQABADAEABQACACADgBIACAAIACAAIAAAOIgDAAIgDAAg");
	this.shape_17.setTransform(39.2,37.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAJBNQgEAAgFgCQgFgBgEgGQgFgGAAgMIAAh+IAOAAIAAB7QAAAHABAEQABADAEABQACACADgBIACAAIACAAIAAAOIgDAAIgDAAg");
	this.shape_18.setTransform(33.8,37.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAyQgNgHgHgNQgIgNAAgRQAAgQAIgNQAHgOAMgGQAMgHANAAQAQAAAKAHQAKAGAGAMQAFAMAAAOIgBADIAAACIhSAAQAAAOAFAKQAHAKAJAFQAKAFAJAAQAKAAAIgEQAJgDAHgGIAHALQgIAIgLADQgLAFgLAAQgPAAgNgIgAAigKQAAgLgEgIQgFgHgGgEQgIgEgIAAQgHAAgIAEQgIAEgFAHQgGAIgCALIBDAAIAAAAg");
	this.shape_19.setTransform(24.4,39.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag+BNIAAiZIAyAAQAVAAASAJQARAJAKASQAJARAAAXQAAAYgJARQgKARgRAKQgSAJgVAAgAgvA/IAhAAQARAAAPgHQAOgIAIgOQAHgOAAgUQAAgTgHgPQgIgOgOgHQgPgHgRAAIghAAg");
	this.shape_20.setTransform(10.6,37.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAyA3IgFhGIAAgHIAAgIIAAgEIgBAAIgCAFIgFALIgfA8IgLAAIgfg7IgFgMIgCgFIgBAAIAAAEIABAIIgBAHIgFBGIgPAAIAJhtIAQAAIAiBCIADAHIACAGIAAADIAAAAIABgDIACgFIAEgIIAhhCIAQAAIAJBtg");
	this.shape_21.setTransform(128.8,17.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAyQgNgIgIgNQgIgNAAgQQAAgPAIgOQAIgMANgIQANgHAPgBQAQABANAHQANAIAIAMQAIAOAAAPQAAAQgIANQgIANgNAIQgNAHgQAAQgPAAgNgHgAgUglQgKAFgGAKQgFALgBALQABAMAFAKQAGALAKAFQAJAGALAAQALAAAKgGQAKgFAGgLQAFgKABgMQgBgLgFgLQgGgKgKgFQgKgGgLAAQgLAAgJAGg");
	this.shape_22.setTransform(114.1,17.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAZA3IgjgzIgRAAIAAAzIgPAAIAAhtIAPAAIAAAvIARAAIAfgvIASAAIgnA1IAAAAIArA4g");
	this.shape_23.setTransform(102.5,17.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqBMIgHgDIgCgCIAFgMIACABIAFADQADABAEABQAHgBAFgFQAFgFAEgHIAHgRIguhrIAQAAIAgBPIACAIIABADIAAAAIABgDIACgIIAhhPIAPAAIg0CEQgEAKgJAHQgIAFgLABIgKgCg");
	this.shape_24.setTransform(90.5,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbBIQgMgIgFgPQgGgPAAgSQAAgRAEgPQAEgOAKgLQAKgLASgJIAngTIAFANIgoATQgNAGgHAIQgIAHgEAJQgDAKgBAJIABAAQAHgLALgFQAKgFALAAQAOAAAKAGQALAGAGAJQAGAMAAAQQAAAPgHAMQgGAMgLAGQgMAHgPAAQgQAAgLgJgAgQgCQgIADgFAIQgEAJgBALQABAMAEAJQAFAIAIAFQAIAFAIAAQAKAAAIgFQAIgEAFgJQAEgJAAgMQAAgMgEgJQgFgIgIgDQgIgFgJAAQgJABgIAFg");
	this.shape_25.setTransform(78.6,14.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGA3IAAhgIgpAAIAAgNIBeAAIAAANIgoAAIAABgg");
	this.shape_26.setTransform(66.9,17.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgqBMIgGgDIgDgCIAFgMIACABIAFADQADABAEABQAHgBAFgFQAFgFAEgHIAHgRIguhrIAQAAIAgBPIACAIIABADIAAAAIABgDIADgIIAghPIAPAAIg0CEQgFAKgHAHQgJAFgLABIgKgCg");
	this.shape_27.setTransform(55.8,19.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcAyQgNgIgIgNQgIgNAAgQQAAgPAIgOQAIgMANgIQANgHAPgBQAQABANAHQANAIAIAMQAIAOAAAPQAAAQgIANQgIANgNAIQgNAHgQAAQgPAAgNgHgAgUglQgKAFgGAKQgFALgBALQABAMAFAKQAGALAKAFQAJAGALAAQALAAAKgGQAKgFAGgLQAFgKABgMQgBgLgFgLQgGgKgKgFQgKgGgLAAQgLAAgJAGg");
	this.shape_28.setTransform(43.2,17.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAgA3IAAgyIg/AAIAAAyIgPAAIAAhtIAPAAIAAAvIA/AAIAAgvIAPAAIAABtg");
	this.shape_29.setTransform(29.8,17.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeBFQgSgLgJgSQgKgTAAgVQAAgWAKgSQAKgRARgLQASgKAUgBQAKAAAKACQAKADAKAEQAJAFAHAGIgIAMQgJgIgNgFQgMgEgNAAQgRAAgOAJQgOAIgIAOQgHAPAAASQAAARAIAPQAHAPAOAJQAOAJASAAQANABANgGQANgFALgKIAIAKQgGAHgJAGQgIAFgLAEQgLACgOAAQgWABgRgLg");
	this.shape_30.setTransform(10.1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,52.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAQAAIAAARg");
	this.shape.setTransform(225.3,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBaQAMgWAGgYQAFgYAAgXQAAgXgFgWQgGgVgMgUIAOAAQAKATAGAWQAHAVAAAYQAAAYgHAZQgHAYgJAUg");
	this.shape_1.setTransform(219.5,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBOIgOgFIAGgNIAKADQAGACAHAAQAMABAHgGQAJgFAHgKQAGgJADgKQAEgLABgMIAAAAQgGAJgLAFQgKAEgKAAQgPAAgKgGQgLgGgGgJQgGgMgBgPQABgQAGgLQAGgMALgGQALgGAOgBQAPABAMAJQANAJAHARQAHAQAAAVQAAANgEAQQgEAPgIANQgJAMgMAIQgNAJgQAAIgPgCgAgUg7QgHAFgEAIQgEAJAAAKQAAARAJAKQAKAIAQAAQAIAAAJgFQAIgDAFgFQAFgGAAgGQAAgIgCgIQgDgIgGgHQgFgHgHgFQgHgEgHAAQgKAAgIAFg");
	this.shape_2.setTransform(210,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBJQgMgGgIgKIAKgLIAHAIQAFAEAHADQAHACAIABQAKgBAIgEQAJgFAFgIQAFgIAAgKQAAgMgFgHQgFgIgJgEQgJgEgJAAQgIAAgHACQgIADgFACIgKgCIAJhLIBIAAIAAANIg7AAIgFAoIAAAHIgBACIABAAIAJgEQAHgCAGAAQAOAAAMAHQAMAHAHAJQAHAMAAAOQAAAOgIAMQgGAKgNAIQgMAGgNAAQgNAAgMgFg");
	this.shape_3.setTransform(197.6,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBJQgMgGgIgKIAKgLIAHAIQAGAEAGADQAHACAIABQAJgBAJgEQAJgFAFgIQAFgIAAgKQAAgMgFgHQgFgIgJgEQgJgEgJAAQgIAAgHACQgHADgHACIgJgCIAIhLIBJAAIAAANIg7AAIgFAoIgBAHIAAACIAAAAIAKgEQAGgCAIAAQAOAAAMAHQALAHAHAJQAHAMAAAOQgBAOgGAMQgIAKgLAIQgMAGgNAAQgOAAgMgFg");
	this.shape_4.setTransform(185.4,37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBNIA9h9IAGgKIACgEIAAgBIgDAAIgIABIhHAAIAAgOIBjAAIAAALIhGCOg");
	this.shape_5.setTransform(173.7,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFBaQgKgUgGgYQgHgZAAgYQAAgYAGgVQAHgWAKgTIAOAAQgMAUgHAVQgEAWAAAXQAAAXAEAYQAGAYANAWg");
	this.shape_6.setTransform(164.8,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBJQgMgGgIgKIAKgLIAIAIQAFAEAGADQAHACAJABQAIgBAJgEQAJgFAFgIQAFgIAAgKQAAgMgFgHQgFgIgJgEQgJgEgJAAQgHAAgIACQgHADgHACIgJgCIAIhLIBJAAIAAANIg7AAIgFAoIgBAHIAAACIAAAAIAKgEQAGgCAIAAQANAAANAHQALAHAHAJQAHAMAAAOQgBAOgGAMQgIAKgLAIQgMAGgNAAQgOAAgMgFg");
	this.shape_7.setTransform(150.1,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBNIAAgOIAjAAIAAhvIAAgGIAAgDIAAAAIgBACIgHAHIgQARIgKgKIAjgjIAMAAIAACLIAjAAIAAAOg");
	this.shape_8.setTransform(139,37.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgA4IAAhAQABgJgCgHQgCgIgFgEQgFgFgKAAQgLAAgJAGQgKAGgFAKQgFAKAAALIAAA2IgQAAIAAhsIAPAAIAAARIAAAGIgBADIABAAQACgGAFgGQAGgHAJgFQAJgFAMAAQAUAAAIALQAJALAAAVIAABEg");
	this.shape_9.setTransform(121.6,39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAyQgNgIgIgNQgIgNAAgQQAAgPAIgOQAIgNANgGQANgIAPAAQAQAAANAIQANAGAIANQAIAOAAAPQAAAQgIANQgIANgNAIQgNAHgQABQgPgBgNgHgAgUglQgKAFgGALQgFAKgBALQABAMAFAKQAGALAKAFQAJAGALAAQALAAAKgGQAKgFAGgLQAFgKABgMQgBgLgFgKQgGgLgKgFQgKgGgLAAQgLAAgJAGg");
	this.shape_10.setTransform(108.1,39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaA3IAAhsIAOAAIAAAUIAAAGIgBADIABAAQADgJAFgGQAEgHAGgEQAHgEAIAAIADAAIADAAIAAAPIgCAAIgDgBQgKABgGAEQgGAFgDAHQgFAIgBAIQgCAHAAAIIAAAvg");
	this.shape_11.setTransform(97.9,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBNIAAhtIANAAIAABtgAgHg5IAAgTIAPAAIAAATg");
	this.shape_12.setTransform(90.8,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBOIAAiYIAOAAIAAALIAAAGIAAADIAAAAQAFgLALgGQAKgGALAAQAPAAALAHQAKAIAGANQAGANAAARQAAASgHALQgGANgLAHQgLAHgPAAQgJAAgKgGQgKgGgFgKIgBAAIABADIAAAHIAAA1gAgQg7QgIAFgFAKQgFAKAAAPQAAAMAEAIQAEAKAIAGQAHAGALABQAJAAAIgGQAIgFAFgKQAFgIAAgOQgBgUgJgMQgKgMgPAAIAAAAQgJAAgHAEg");
	this.shape_13.setTransform(82.2,41.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTA2QgKgEgJgJIAIgKQAHAGAJAEQAJADAHAAQAJABAHgFQAGgEAAgKQAAgGgGgFQgGgEgJgEIgPgHQgJgCgGgHQgGgGAAgLQAAgJAFgHQAFgIAJgDQAIgDAJAAQAJAAAJACQAJAEAHAGIgHALQgFgFgIgCQgHgDgIAAQgEAAgFACQgFACgDADQgDAEAAAGQAAAHAGAFQAGAFAHADIARAGQAJADAGAGQAGAHAAAKQAAAKgFAGQgFAIgIADQgIAFgLAAQgKgBgLgDg");
	this.shape_14.setTransform(70.4,39.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgA4IAAhAQAAgJgBgHQgCgIgFgEQgFgFgLAAQgKAAgJAGQgJAGgGAKQgGAKABALIAAA2IgPAAIAAhsIAOAAIAAARIAAAGIgBADIABAAQABgGAGgGQAGgHAJgFQAJgFAMAAQAUAAAIALQAJALAAAVIAABEg");
	this.shape_15.setTransform(59.3,39.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGBNIAAiZIANAAIAACZg");
	this.shape_16.setTransform(49.7,37.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAJBNQgEAAgFgCQgFgBgEgGQgFgGAAgMIAAh+IAOAAIAAB7QAAAHABAEQABADAEABQACACADgBIACAAIACAAIAAAOIgDAAIgDAAg");
	this.shape_17.setTransform(39.2,37.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAJBNQgEAAgFgCQgFgBgEgGQgFgGAAgMIAAh+IAOAAIAAB7QAAAHABAEQABADAEABQACACADgBIACAAIACAAIAAAOIgDAAIgDAAg");
	this.shape_18.setTransform(33.8,37.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAyQgNgHgHgNQgIgNAAgRQAAgQAIgNQAHgOAMgGQAMgHANAAQAQAAAKAHQAKAGAGAMQAFAMAAAOIgBADIAAACIhSAAQAAAOAFAKQAHAKAJAFQAKAFAJAAQAKAAAIgEQAJgDAHgGIAHALQgIAIgLADQgLAFgLAAQgPAAgNgIgAAigKQAAgLgEgIQgFgHgGgEQgIgEgIAAQgHAAgIAEQgIAEgFAHQgGAIgCALIBDAAIAAAAg");
	this.shape_19.setTransform(24.4,39.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag+BNIAAiZIAyAAQAVAAASAJQARAJAKASQAJARAAAXQAAAYgJARQgKARgRAKQgSAJgVAAgAgvA/IAhAAQARAAAPgHQAOgIAIgOQAHgOAAgUQAAgTgHgPQgIgOgOgHQgPgHgRAAIghAAg");
	this.shape_20.setTransform(10.6,37.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAyA3IgFhGIAAgHIAAgIIAAgEIgBAAIgCAFIgFALIgfA8IgLAAIgfg7IgFgMIgCgFIgBAAIAAAEIABAIIgBAHIgFBGIgPAAIAJhtIAQAAIAiBCIADAHIACAGIAAADIAAAAIABgDIACgFIAEgIIAhhCIAQAAIAJBtg");
	this.shape_21.setTransform(128.8,17.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAyQgNgIgIgNQgIgNAAgQQAAgPAIgOQAIgMANgIQANgHAPgBQAQABANAHQANAIAIAMQAIAOAAAPQAAAQgIANQgIANgNAIQgNAHgQAAQgPAAgNgHgAgUglQgKAFgGAKQgFALgBALQABAMAFAKQAGALAKAFQAJAGALAAQALAAAKgGQAKgFAGgLQAFgKABgMQgBgLgFgLQgGgKgKgFQgKgGgLAAQgLAAgJAGg");
	this.shape_22.setTransform(114.1,17.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAZA3IgjgzIgRAAIAAAzIgPAAIAAhtIAPAAIAAAvIARAAIAfgvIASAAIgnA1IAAAAIArA4g");
	this.shape_23.setTransform(102.5,17.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqBMIgHgDIgCgCIAFgMIACABIAFADQADABAEABQAHgBAFgFQAFgFAEgHIAHgRIguhrIAQAAIAgBPIACAIIABADIAAAAIABgDIACgIIAhhPIAPAAIg0CEQgEAKgJAHQgIAFgLABIgKgCg");
	this.shape_24.setTransform(90.5,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbBIQgMgIgFgPQgGgPAAgSQAAgRAEgPQAEgOAKgLQAKgLASgJIAngTIAFANIgoATQgNAGgHAIQgIAHgEAJQgDAKgBAJIABAAQAHgLALgFQAKgFALAAQAOAAAKAGQALAGAGAJQAGAMAAAQQAAAPgHAMQgGAMgLAGQgMAHgPAAQgQAAgLgJgAgQgCQgIADgFAIQgEAJgBALQABAMAEAJQAFAIAIAFQAIAFAIAAQAKAAAIgFQAIgEAFgJQAEgJAAgMQAAgMgEgJQgFgIgIgDQgIgFgJAAQgJABgIAFg");
	this.shape_25.setTransform(78.6,14.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGA3IAAhgIgpAAIAAgNIBeAAIAAANIgoAAIAABgg");
	this.shape_26.setTransform(66.9,17.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgqBMIgGgDIgDgCIAFgMIACABIAFADQADABAEABQAHgBAFgFQAFgFAEgHIAHgRIguhrIAQAAIAgBPIACAIIABADIAAAAIABgDIADgIIAghPIAPAAIg0CEQgFAKgHAHQgJAFgLABIgKgCg");
	this.shape_27.setTransform(55.8,19.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcAyQgNgIgIgNQgIgNAAgQQAAgPAIgOQAIgMANgIQANgHAPgBQAQABANAHQANAIAIAMQAIAOAAAPQAAAQgIANQgIANgNAIQgNAHgQAAQgPAAgNgHgAgUglQgKAFgGAKQgFALgBALQABAMAFAKQAGALAKAFQAJAGALAAQALAAAKgGQAKgFAGgLQAFgKABgMQgBgLgFgLQgGgKgKgFQgKgGgLAAQgLAAgJAGg");
	this.shape_28.setTransform(43.2,17.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAgA3IAAgyIg/AAIAAAyIgPAAIAAhtIAPAAIAAAvIA/AAIAAgvIAPAAIAABtg");
	this.shape_29.setTransform(29.8,17.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeBFQgSgLgJgSQgKgTAAgVQAAgWAKgSQAKgRARgLQASgKAUgBQAKAAAKACQAKADAKAEQAJAFAHAGIgIAMQgJgIgNgFQgMgEgNAAQgRAAgOAJQgOAIgIAOQgHAPAAASQAAARAIAPQAHAPAOAJQAOAJASAAQANABANgGQANgFALgKIAIAKQgGAHgJAGQgIAFgLAEQgLACgOAAQgWABgRgLg");
	this.shape_30.setTransform(10.1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,52.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image17();
	this.instance.setTransform(0,0,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219.6,152.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image17();
	this.instance.setTransform(0,0,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219.6,152.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image10();
	this.instance.setTransform(0,0,0.057,0.057);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.2,26.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBsIAAgYIAXAAIAAAYgAgJA0IgBifIAUAAIAACfg");
	this.shape.setTransform(127.8,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBNIAAhkIAAgJIABgJIAAgFIgBAAIgDAFIgGAJIgGAJIhLBkIgUAAIAAiZIAUAAIAABkIAAAKIAAAJIgBAEIABAAIAEgFIAFgJIAHgJIBLhkIAUAAIAACZg");
	this.shape_1.setTransform(114.6,56.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBKQgOgHgJgJIALgOIAJAIQAGAEAJAEQAIADAKAAQAIAAAJgDQAIgDAGgHQAFgHAAgKQAAgOgKgHQgJgHgRAAIgTAAIAAgPIARAAQANAAAKgGQAJgHABgNQgBgNgIgHQgJgGgNAAQgLAAgJADQgKAEgIAGIgJgOQAIgHANgFQAMgFAQAAQAOAAALAEQAMAFAGAJQAHAJAAAOQgBAPgGAJQgGAIgLAEIAAABQANACAIAIQAIAKABAPQgBAQgIALQgIAKgNAGQgNAFgOAAQgRAAgOgHg");
	this.shape_2.setTransform(98.4,56.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBNIAAg8IggAAIgnA8IgZAAIAmg1IAEgHIADgDIAAAAQgKgCgIgGQgIgFgFgIQgFgKAAgMQAAgQAHgKQAHgLAMgFQANgGAOABIA3AAIAACZgAgSg1QgJAHgBARQABAQAKAIQAKAGANAAIAgAAIAAg+IgeAAQgQAAgKAIg");
	this.shape_3.setTransform(83.4,56.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BNIAAiZIA5AAQAWAAAOAKQANAKAAATQAAANgFAIQgHAKgLAEIAAABQAPABAIAJQAIALAAAOQAAAUgOAMQgPALgbAAgAgjA9IAjAAQASAAAJgIQAJgHAAgNQAAgOgKgGQgJgIgRAAIgjAAgAgjgJIAhAAQAOAAAHgHQAJgHAAgNQAAgMgJgGQgIgHgPAAIgfAAg");
	this.shape_4.setTransform(69.2,56.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBHQgSgLgLgSQgKgSgBgYQABgXAKgSQALgTASgKQATgKAVAAQAQAAAPAFQAPAFALAMIgLAQQgIgJgMgFQgMgFgNgBQgPABgOAIQgOAIgIAOQgIAOAAARQAAASAIAOQAIAOAOAIQAOAIAPAAQAOAAANgGQAOgFAJgLIAKAQQgLAMgQAGQgQAHgSAAQgVAAgTgKg");
	this.shape_5.setTransform(52.7,56.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBMQgMgFgIgKQgHgLgBgPQAAgPAHgKQAHgKALgEQALgGAMgCQANgDAKgBIAWgBIAJAAIAAgEQAAgXgLgJQgLgJgRAAQgKAAgKAEQgMAEgKAHIgJgQQAJgIAPgFQAPgEAOAAQAcAAAPAPQAPAPAAAdIAABiIgUAAIAAgSIABgJIAAgEIAAAAQgFAKgIAHQgHAIgLAFQgKAFgKAAQgOAAgLgFgAAKAAQgKAAgMADQgMADgIAHQgHAIgBANQAAAHAFAHQADAHAIAEQAIAEALAAQAOAAAKgJQALgIAGgOQAFgNAAgOIAAgFIgJAAIgWAAg");
	this.shape_6.setTransform(27.7,56.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtBNIAAhGIhZAAIAABGIgVAAIAAiZIAVAAIAABCIBZAAIAAhCIAVAAIAACZg");
	this.shape_7.setTransform(11.2,56.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghBMQgMgFgIgKQgHgLgBgPQAAgPAHgKQAHgKALgEQALgGAMgCQANgDALgBIAVgBIAJAAIAAgEQAAgXgLgJQgLgJgRAAQgKAAgLAEQgLAEgKAHIgJgQQAJgIAPgFQAPgEAOAAQAcAAAPAPQAPAPAAAdIAABiIgUAAIAAgSIAAgJIABgEIgBAAQgDAKgJAHQgHAIgLAFQgKAFgKAAQgOAAgLgFgAALAAQgLAAgMADQgMADgIAHQgIAIAAANQAAAHAFAHQADAHAIAEQAIAEAMAAQANAAAKgJQALgIAGgOQAFgNAAgOIAAgFIgJAAIgVAAg");
	this.shape_8.setTransform(195.9,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA+BgIAAglIh7AAIAAAlIgUAAIAAg3IATAAQAKgNAFgQQAGgOACgQIAEgeIABgWIAAgZIBeAAIAACIIAWAAIAAA3gAgOhEIAAAXIgDAcQgEAQgEANQgGAPgIAOIBOAAIAAh2Ig1AAg");
	this.shape_9.setTransform(179.4,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtBNIAAiZIBbAAIAAASIhGAAIAACHg");
	this.shape_10.setTransform(165.4,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBHQgSgLgLgSQgKgSgBgYQABgYAKgTQAKgSASgKQARgJATAAQAWAAAPAKQAOAJAHARQAIAQAAATIgBAGIAAADIh2AAQABAUAIAOQAIANAOAIQANAHAPAAQANAAAMgFQAMgFAKgJIAKAQQgMAKgPAGQgPAGgQAAQgVAAgTgKgAAxgPQgBgQgGgLQgGgKgKgGQgJgFgMAAQgLAAgLAGQgMAFgIALQgHALgDAPIBgAAIAAAAg");
	this.shape_11.setTransform(149.7,23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeBHQgSgLgLgSQgKgSgBgYQABgXAKgSQALgTASgKQATgKAVAAQAQAAAPAFQAPAFALAMIgLAQQgIgJgMgFQgMgFgNgBQgPABgOAIQgOAIgIAOQgIAOAAARQAAASAIAOQAIAOAOAIQAOAIAPAAQAOAAANgGQAOgFAJgLIAKAQQgLAMgQAGQgQAHgSAAQgVAAgTgKg");
	this.shape_12.setTransform(132.9,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BNIAAiZIA4AAQAWgBANALQAOAKABATQgBAMgFAKQgHAIgLAFIAAAAQAPACAJAKQAHAKAAAOQAAAUgOAMQgPALgbAAgAgjA9IAjAAQARAAAKgIQAJgHAAgNQAAgOgKgGQgJgIgRAAIgjAAgAgjgJIAhAAQAOAAAHgHQAJgHAAgNQAAgMgJgGQgIgHgPABIgfAAg");
	this.shape_13.setTransform(117,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeBHQgSgLgLgSQgKgSgBgYQABgYAKgTQAKgSASgKQARgJATAAQAWAAAPAKQAOAJAHARQAIAQAAATIgBAGIAAADIh2AAQABAUAIAOQAIANAOAIQANAHAPAAQANAAAMgFQAMgFAKgJIAKAQQgMAKgPAGQgPAGgQAAQgVAAgTgKgAAxgPQgBgQgGgLQgGgKgKgGQgJgFgMAAQgLAAgLAGQgMAFgIALQgHALgDAPIBgAAIAAAAg");
	this.shape_14.setTransform(92.4,23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBNIAAiHIg5AAIAAgSICFAAIAAASIg5AAIAACHg");
	this.shape_15.setTransform(76.4,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BNIAAiZIAVAAIAAA7IAgAAQAOAAAMAFQANAEAHAJQAIALAAASQAAAVgNANQgOANgbAAgAggA8IAfAAQARAAAIgIQAJgJAAgNQAAgPgJgJQgIgGgQAAIggAAg");
	this.shape_16.setTransform(62.4,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA+BgIAAglIh7AAIAAAlIgUAAIAAg3IATAAQAKgNAFgQQAGgOACgQIAEgeIABgWIAAgZIBeAAIAACIIAWAAIAAA3gAgOhEIgBAXIgCAcQgEAQgEANQgGAPgIAOIBOAAIAAh2Ig1AAg");
	this.shape_17.setTransform(45.3,25.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BsIgJgFIgEgCIAIgRIACACIAHAEIAJACQALgBAHgHQAIgHAFgLIAJgXIhBiYIAXAAIAtBwIAEALIABAGIAAAAIACgGIADgLIAthwIAXAAIhLC6QgGAPgMAKQgLAIgQAAQgHAAgHgCg");
	this.shape_18.setTransform(28.4,26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhDBsIAAjXIB5AAIAAATIhkAAIAABHIAyAAQASAAAPAIQAPAGAIAMQAIAPAAAVQAAAUgIAOQgIAOgOAHQgOAJgSgBgAguBaIAxAAQAUgBAMgLQALgMABgVQgBgVgMgMQgMgMgUAAIgwAAg");
	this.shape_19.setTransform(12,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.1,74.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image27();
	this.instance.setTransform(0,223.6,0.264,0.264);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape.setTransform(223.7,286.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAmIAdg9IADgFIABgCIgBAAIgFAAIgiAAIAAgHIAxAAIAAAFIgiBGg");
	this.shape_1.setTransform(219.7,282.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAmIAAg1IAGAAIAAA1gAgCgcIAAgJIAGAAIAAAJg");
	this.shape_2.setTransform(215.4,282.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAYIgCgfIAAgCIAAgBIgNAZIgFAAIgMgZIAAABIAAACIgDAfIgEAAIACgvIAFAAIANAaIABADIABACIAAgCIABgDIANgaIAGAAIAEAvgAgcAYIAAgpIgRAAIAAgGIApAAIAAAGIgRAAIAAApg");
	this.shape_3.setTransform(205.9,281.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAYQgHgDgEgHQgDgGgBgIQABgHADgHQAEgHAGgDQAGgEAGAAQAHAAAGAEQAFADACAGQADAGAAAHIAAABIAAABIgpAAQAAAHADAFQADAEAFADQAFACAEAAQAEAAAFgBQAEgCADgDIAEAGQgEADgGACQgFACgGABQgGAAgGgFgAARgEQAAgGgCgEQgCgEgEgCQgDgCgEAAQgDAAgEACQgEACgDAEQgDAEAAAGIAgAAIAAAAg");
	this.shape_4.setTransform(197.5,284);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAbIAAg1IAHAAIAAAKIAAADIAAACIAEgIQABgEADgCQADgBAFAAIABAAIABAAIAAAIIgBgBIgBAAQgFAAgDACQgDACgBAFIgDAIIgBAGIAAAXg");
	this.shape_5.setTransform(192.8,284);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAYQgHgEgEgGQgDgGgBgIQABgHADgGQAEgHAHgEQAGgEAHAAQAIAAAGAEQAHAEAEAHQAEAGAAAHQAAAIgEAGQgEAGgHAEQgGAEgIABQgHgBgGgEgAgJgSQgFADgDAFQgDAFAAAFQAAAFADAGQADAEAFAEQAFACAEAAQAGAAAEgCQAFgEADgEQADgGAAgFQAAgFgDgFQgDgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_6.setTransform(187.1,284);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAiQgJgGgFgIQgFgKAAgKQAAgKAFgKQAFgJAJgFQAIgEAKAAIAKABIAJACIAJAGIgEAGQgFgEgGgCQgHgCgGAAQgHgBgIAFQgGAEgEAHQgEAIAAAIQAAAIAEAHQAEAIAGAEQAIAFAIAAQAGAAAHgCQAGgDAGgFIAEAFIgIAGIgKAFQgFACgHAAQgKgBgIgFg");
	this.shape_7.setTransform(179.9,282.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAiQgJgGgFgIQgFgKAAgKQAAgKAFgJQAFgJAJgGQAIgEAKAAQALAAAIAEQAJAGAFAJQAFAJABAKQgBAKgFAKQgFAIgJAGQgIAFgLABQgKgBgIgFgAgPgcQgIAEgEAIQgEAIAAAIQAAAJAEAHQAEAJAIAEQAHAEAIAAQAJAAAHgEQAIgEAEgJQAEgHABgJQgBgIgEgIQgEgIgIgEQgHgFgJABQgIgBgHAFgAAJAVIgIgRIgHAAIAAARIgFAAIAAgpIAMAAQAHAAADADQADAEABAFQgBAGgCACQgDABgDABIABABIABACIAIAQgAgGAAIAGAAQAEAAACgBQACgCAAgFQAAgDgCgCQgCgCgEAAIgGAAg");
	this.shape_8.setTransform(168.5,282.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEAnIgEgBQgCgCgCgCQgCgDAAgGIAAg+IAGAAIAAA8IAAAGIADACIACABIABAAIABAAIAAAGIgBABIgCAAg");
	this.shape_9.setTransform(162.9,282.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAYQgHgDgEgHQgDgGgBgIQABgHADgHQAEgHAGgDQAGgEAGAAQAHAAAGAEQAFADACAGQADAGAAAHIAAABIAAABIgpAAQAAAHADAFQADAEAFADQAFACAEAAQAEAAAFgBQAEgCADgDIAEAGQgEADgGACQgFACgGABQgGAAgGgFgAARgEQAAgGgCgEQgCgEgEgCQgDgCgEAAQgDAAgEACQgEACgDAEQgDAEAAAGIAgAAIAAAAg");
	this.shape_10.setTransform(158.2,284);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAjIgFgBIgGgCQgCgDgCgEQgCgEAAgGIAAgbIgIAAIAAgHIAIAAIAAgPIAGAAIAAAPIAOAAIAAAHIgOAAIAAAaQAAAGABADQADAEADAAIAFABIABAAIACAAIAAAGIgCABIgCAAg");
	this.shape_11.setTransform(153.5,283.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAcIAAgfIgBgJQgBgDgCgDQgDgCgFAAQgEAAgFADQgEADgDAFQgDAFAAAFIAAAbIgHAAIAAg2IAHAAIAAAJIgBADIAAABIAFgFQACgEAFgCQAEgDAFAAQAKAAAFAGQADAFABALIAAAhg");
	this.shape_12.setTransform(148.4,283.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_13.setTransform(143.5,282.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAbQgEgDgDgDQgDgDAAgGQAAgFADgEQACgDAEgBIAJgDIAGgBIAIAAIADAAIAAgBQAAgJgEgDQgDgDgGAAQgDAAgEABIgHAFIgDgHQADgCAFgCQAFgCAEAAQAKAAAFAGQAGAFAAALIAAAhIgHAAIAAgGIAAgEIAAgBIgEAGQgDADgEACQgEACgCAAQgFAAgEgCgAgDABQgEABgDACQgDADAAAFIABAEIAEAFQADABAEAAQAEAAADgDQAEgDACgFQACgFAAgEIAAgCIgDAAIgIAAIgGABg");
	this.shape_14.setTransform(136.2,284);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAnIAAhMIAHAAIAAAGIAAADIAAACIAAAAQADgGAFgDQAFgDAEAAQAIAAAFAEQAGADADAHQACAGABAJQgBAJgDAEQgDAHgFADQgGAEgHAAQgEAAgFgDQgFgDgCgFIgBAAIAAABIABAEIAAAbgAgHgdQgEADgDAEQgDAFAAAIQAAAGACADQACAFAEADQAEADAFAAQAEAAAEgCQAEgDADgFQACgDAAgHQAAgKgFgGQgFgGgHAAQgDAAgEACg");
	this.shape_15.setTransform(130.5,285);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAYQgHgEgEgGQgDgGgBgIQABgHADgGQAEgHAHgEQAGgEAHAAQAIAAAGAEQAHAEAEAHQAEAGAAAHQAAAIgEAGQgEAGgHAEQgGAEgIABQgHgBgGgEgAgJgSQgFADgDAFQgDAFAAAFQAAAFADAGQADAEAFAEQAFACAEAAQAGAAAEgCQAFgEADgEQADgGAAgFQAAgFgDgFQgDgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_16.setTransform(123.7,284);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAYQgHgDgEgHQgDgGgBgIQABgHADgGQAEgIAHgDQAGgEAGAAQAGAAAFADQAFABAFAEIgFAGIgHgFQgEgCgFAAQgEAAgFADQgFADgDAEQgCAGAAAFQAAAGACAFQADAFAFADQAFACAEAAQAGAAAEgBQAFgCADgEIAEAGQgEAEgFACQgHACgGABQgGAAgGgFg");
	this.shape_17.setTransform(117.4,284);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAYQgHgDgEgHQgEgGAAgIQAAgHAEgGQAEgIAHgDQAGgEAGAAQAFAAAGADQAFABAEAEIgDAGIgIgFQgEgCgFAAQgEAAgFADQgEADgEAEQgCAGAAAFQAAAGACAFQAEAFAEADQAFACAEAAQAFAAAFgBQAFgCADgEIAEAGQgEAEgFACQgHACgGABQgGAAgGgFg");
	this.shape_18.setTransform(111.4,284);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAYQgHgDgEgHQgDgGgBgIQABgHADgHQAEgHAGgDQAGgEAGAAQAHAAAGAEQAFADACAGQADAGAAAHIAAABIAAABIgpAAQAAAHADAFQADAEAFADQAFACAEAAQAEAAAFgBQAEgCADgDIAEAGQgEADgGACQgFACgGABQgGAAgGgFgAARgEQAAgGgCgEQgCgEgEgCQgDgCgEAAQgDAAgEACQgEACgDAEQgDAEAAAGIAgAAIAAAAg");
	this.shape_19.setTransform(105.3,284);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATAiIAAgNIgsAAIAAg2IAHAAIAAAvIAdAAIAAgvIAHAAIAAAvIAIAAIAAAUg");
	this.shape_20.setTransform(99.3,284.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAYQgHgEgEgGQgDgGgBgIQABgHADgGQAEgHAHgEQAGgEAHAAQAIAAAGAEQAHAEAEAHQAEAGAAAHQAAAIgEAGQgEAGgHAEQgGAEgIABQgHgBgGgEgAgJgSQgFADgDAFQgDAFAAAFQAAAFADAGQADAEAFAEQAFACAEAAQAGAAAEgCQAFgEADgEQADgGAAgFQAAgFgDgFQgDgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_21.setTransform(92.3,284);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAnIAAhMIAHAAIAAAGIAAADIAAACIAAAAQADgGAFgDQAFgDAEAAQAIAAAFAEQAGADADAHQACAGABAJQgBAJgDAEQgDAHgFADQgGAEgHAAQgEAAgFgDQgFgDgCgFIgBAAIAAABIABAEIAAAbgAgHgdQgEADgDAEQgDAFAAAIQAAAGACADQACAFAEADQAEADAFAAQAEAAAEgCQAEgDADgFQACgDAAgHQAAgKgFgGQgFgGgHAAQgDAAgEACg");
	this.shape_22.setTransform(85.8,285);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAbIAAguIgdAAIAAAuIgIAAIAAg1IAtAAIAAA1g");
	this.shape_23.setTransform(79.2,284);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAZQgHgEgEgGQgDgHgBgIQABgIADgGQAEgHAGgDQAGgEAGABQAHgBAGAEQAFADACAGQADAGAAAHIAAACIAAAAIgpAAQAAAGADAFQADAFAFADQAFACAEAAQAEAAAFgCQAEgBADgDIAEAFQgEAEgGACQgFADgGgBQgGAAgGgDgAARgFQAAgFgCgEQgCgEgEgBQgDgDgEAAQgDAAgEADQgEABgDAEQgDAEAAAFIAgAAIAAAAg");
	this.shape_24.setTransform(127.4,270.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAIAAAEAEQAFADAAAHQAAAEgCAEQgCADgEABQAGAAACADQADAEAAAFQAAAHgGAEQgEAEgKAAgAgMAVIAMAAQAGAAADgCQAEgDgBgEQABgFgEgDQgDgCgGAAIgMAAgAgMgCIAMAAQAEAAADgDQADgCAAgFQAAgEgDgCQgEgCgDAAIgMAAg");
	this.shape_25.setTransform(121.8,270.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAZQgHgFgEgGQgDgGgBgIQABgHADgHQAEgGAHgEQAGgEAHABQAIgBAGAEQAHAEAEAGQAEAHAAAHQAAAIgEAGQgEAGgHAFQgGADgIAAQgHAAgGgDgAgJgSQgFADgDAFQgDAEAAAGQAAAGADAEQADAFAFADQAFADAEAAQAGAAAEgDQAFgDADgFQADgEAAgGQAAgGgDgEQgDgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_26.setTransform(115.4,270.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQAbIAAgZIgfAAIAAAZIgHAAIAAg1IAHAAIAAAYIAfAAIAAgYIAHAAIAAA1g");
	this.shape_27.setTransform(108.7,270.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAZQgGgEgEgGQgEgHAAgIQAAgHAEgHQAEgGAGgEQAHgEAGABQAGAAAFACQAGABADAEIgDAGIgHgFQgFgCgEAAQgFAAgEADQgGACgCAGQgDAEAAAGQAAAGADAFQACAFAGACQAEADAFAAQAEAAAFgCQAFgCAEgDIADAFQgEAEgGADQgFADgHgBQgGAAgHgDg");
	this.shape_28.setTransform(102.6,270.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAZQgHgFgEgGQgDgGgBgIQABgHADgHQAEgGAHgEQAGgEAHABQAIgBAGAEQAHAEAEAGQAEAHAAAHQAAAIgEAGQgEAGgHAFQgGADgIAAQgHAAgGgDgAgJgSQgFADgDAFQgDAEAAAGQAAAGADAEQADAFAFADQAFADAEAAQAGAAAEgDQAFgDADgFQADgEAAgGQAAgGgDgEQgDgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_29.setTransform(96.1,270.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAbQgEgCgDgEQgDgDAAgGQAAgFADgEQACgDAEAAIAJgEIAGgBIAIAAIADAAIAAgBQAAgJgEgDQgDgDgGAAQgDAAgEACIgHAEIgDgHQADgCAFgCQAFgBAEAAQAKgBAFAGQAGAFAAALIAAAhIgHAAIAAgHIAAgDIAAgBIgEAGQgDADgEACQgEABgCAAQgFAAgEgBgAgDAAQgEABgDADQgDADAAAEIABAGIAEADQADACAEAAQAEAAADgDQAEgDACgFQACgFAAgFIAAgBIgDAAIgIAAIgGAAg");
	this.shape_30.setTransform(86.8,270.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAWAmIAAgjIgrAAIAAAjIgHAAIAAhLIAHAAIAAAjIArAAIAAgjIAHAAIAABLg");
	this.shape_31.setTransform(80.1,269.7);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(254,38,1,1,0,0,0,76,38);
	this.instance_1.cache(-2,-2,156,80);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQBSQALgVAFgVQAFgVAAgVQgBgVgEgUQgGgUgKgSIANAAQAIASAGATQAGAUAAAWQAAAWgGAWQgGAWgIASg");
	this.shape_32.setTransform(268.8,187.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaBHQgGgCgHgDIAGgMIAJAEQAFABAGAAQALAAAGgFQAJgFAGgIQAFgIAEgKQADgKABgKIgBAAQgFAHgKAFQgJAEgJAAQgNAAgKgGQgKgFgFgJQgGgKAAgNQAAgPAGgLQAGgKAKgGQAKgFAMAAQANAAAMAIQAMAJAFAPQAHAPAAATQAAALgEAOQgDAOgIAMQgHALgMAIQgLAHgPAAIgNgBgAgSg2QgGAFgFAHQgDAIAAAKQABAPAIAJQAJAHAOAAQAIAAAHgEQAIgDAFgEQAEgFAAgGQAAgHgCgIQgDgHgFgHQgFgGgGgEQgGgEgHAAQgJAAgHAEg");
	this.shape_33.setTransform(260.2,186.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaBCQgKgFgIgKIAKgJQACAEAFADQAEADAGADQAGADAIAAQAIgBAHgEQAJgEAEgHQAFgHAAgKQAAgKgFgIQgEgHgJgCQgHgEgJgBQgGAAgHACQgHADgFACIgJgCIAHhEIBCAAIAAANIg1AAIgFAkIAAAFIgBACIABAAIAIgEQAHgBAGAAQAMAAALAGQALAHAGAHQAGALABANQgBANgHALQgFAJgMAHQgKAGgMAAQgNAAgLgFg");
	this.shape_34.setTransform(248.9,186.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZBCQgMgFgGgKIAJgJQACAEAEADQAFADAGADQAGADAIAAQAIgBAHgEQAJgEAEgHQAFgHAAgKQAAgKgFgIQgEgHgJgCQgHgEgJgBQgGAAgHACQgHADgGACIgIgCIAHhEIBDAAIAAANIg3AAIgEAkIAAAFIAAACIAAAAIAJgEQAFgBAHAAQAMAAALAGQALAHAGAHQAGALABANQgBANgGALQgHAJgLAHQgLAGgMAAQgMAAgKgFg");
	this.shape_35.setTransform(237.8,186.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggBGIA3hxIAEgKIADgDIAAgBIgDAAIgHABIhAAAIAAgNIBZAAIAAAKIg/CBg");
	this.shape_36.setTransform(227.1,186.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAEBSQgIgSgGgWQgGgWAAgWQAAgWAGgUQAGgTAIgSIANAAQgLASgGAUQgEAUAAAVQAAAVAEAVQAGAVALAVg");
	this.shape_37.setTransform(219,187.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaBCQgKgFgIgKIAJgJQADAEAEADQAFADAGADQAGADAIAAQAHgBAJgEQAHgEAFgHQAFgHAAgKQAAgKgFgIQgFgHgHgCQgJgEgHgBQgIAAgGACQgHADgFACIgJgCIAIhEIBBAAIAAANIg2AAIgDAkIgBAFIAAACIAAAAIAJgEQAFgBAHAAQAMAAALAGQALAHAGAHQAGALAAANQAAANgGALQgGAJgLAHQgMAGgMAAQgMAAgLgFg");
	this.shape_38.setTransform(205.6,186.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglBGIAAgNIAgAAIAAhlIAAgFIAAgDIgCACIgFAHIgPAPIgJgJIAgggIAKAAIAAB+IAfAAIAAANg");
	this.shape_39.setTransform(195.5,186.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAeAzIAAg6QAAgIgCgHQgBgHgFgEQgFgEgJAAQgJAAgJAFQgIAGgFAJQgFAJAAAKIAAAxIgOAAIAAhjIANAAIAAAQIAAAGIAAACQACgEAFgGQAFgHAIgEQAJgFAKAAQASAAAIAKQAIAKgBATIAAA+g");
	this.shape_40.setTransform(179.6,188.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaAtQgMgHgGgMQgIgMAAgOQAAgOAIgMQAGgMAMgGQANgHANAAQAOAAAMAHQANAGAGAMQAIAMAAAOQAAAOgIAMQgGAMgNAHQgMAHgOAAQgNAAgNgHgAgSgiQgJAFgGAJQgEAJAAALQAAALAEAJQAGAJAJAFQAIAGAKAAQALAAAIgGQAJgFAGgJQAEgJAAgLQAAgLgEgJQgGgJgJgFQgIgFgLAAQgKAAgIAFg");
	this.shape_41.setTransform(167.4,188.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAyIAAhiIAOAAIAAASIgBAGIAAACQADgHAFgHQADgGAFgEQAHgDAHAAIADAAIADAAIAAAOIgCgBIgDAAQgJAAgFAFQgGAEgCAGQgFAHgCAIIgBAOIAAAqg");
	this.shape_42.setTransform(158.2,188.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFBGIAAhjIALAAIAABjgAgGg0IAAgRIANAAIAAARg");
	this.shape_43.setTransform(151.7,186.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgtBHIAAiLIAOAAIAAALIAAAGIgBACIABAAQAFgKAIgGQAKgFAKAAQANAAAKAHQAKAGAFAMQAFAMAAAQQAAAQgFAKQgHAMgJAGQgLAHgNAAQgIAAgJgGQgJgFgFgKIAAAAIAAADIABAGIAAAxgAgOg1QgIAEgFAJQgEAIAAAPQAAAKADAIQAEAJAHAGQAIAFAJAAQAIAAAHgEQAIgGAEgJQAEgHABgMQAAgTgJgLQgJgKgOgBQgHAAgHAFg");
	this.shape_44.setTransform(143.9,190.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAxQgKgEgHgHIAHgKQAGAGAIADQAIADAGAAQAJAAAGgEQAFgEAAgIQAAgHgFgEQgFgEgIgDIgOgGQgIgCgGgGQgFgFAAgKQAAgJAFgHQAEgGAIgDQAIgDAHAAQAIAAAJACQAIADAGAGIgGAKQgFgEgHgDQgHgCgHAAQgDAAgEABQgFACgDADQgDAEAAAFQAAAHAGAEQAFAEAGADIAQAGQAIACAFAGQAGAGAAAKQAAAIgEAHQgFAGgHADQgIAEgKAAQgIAAgKgDg");
	this.shape_45.setTransform(133.2,188.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAeAzIAAg6QAAgIgCgHQgBgHgFgEQgFgEgJAAQgJAAgJAFQgIAGgFAJQgFAJAAAKIAAAxIgOAAIAAhjIANAAIAAAQIAAAGIAAACQACgEAFgGQAFgHAIgEQAJgFAKAAQASAAAIAKQAIAKgBATIAAA+g");
	this.shape_46.setTransform(123,188.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGBGIAAiLIANAAIAACLg");
	this.shape_47.setTransform(114.3,186.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAABFQgEgCgEgFQgEgGgBgLIAAhyIANAAIAABvQAAAHABADIAEAFIAFABIACAAIACgBIAAANIgCAAIgDAAIgJgBg");
	this.shape_48.setTransform(104.7,186.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAABFQgEgCgEgFQgEgGgBgLIAAhyIANAAIAABvQAAAHABADIAEAFIAFABIACAAIACgBIAAANIgCAAIgDAAIgJgBg");
	this.shape_49.setTransform(99.8,186.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTAtQgMgGgGgMQgHgMAAgPQAAgPAGgMQAHgMALgGQAMgGALAAQAOAAAKAGQAJAHAFAKQAEALAAAMIAAAEIAAABIhLAAQAAANAGAJQAFAJAJAEQAIAFAJAAQAIAAAIgDQAIgEAGgFIAHAKQgIAHgKADQgJAEgLAAQgNAAgMgHgAAggJQgBgKgEgHQgEgHgGgEQgGgDgIAAQgGAAgIAEQgHADgFAHQgFAHgCAKIA+AAIAAAAg");
	this.shape_50.setTransform(91.3,188.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag5BGIAAiLIAuAAQATAAAQAIQAQAJAIAPQAKAQgBAVQABAWgKAPQgIAQgQAIQgQAJgTAAgAgqA5IAeAAQAPAAANgGQANgHAHgNQAHgNAAgSQAAgRgHgNQgHgNgNgHQgNgGgPAAIgeAAg");
	this.shape_51.setTransform(78.8,186.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_1},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330.1,291.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAUIAAgnIARAAQAGAAAEADQAEADAAAFIgBAFQgCADgCAAIAAAAQADAAACACQACADAAADQAAAEgCADQgCACgEACIgHABgAgGANIAGAAQADAAACgCQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgDgBIgGAAgAgGgCIAGAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgGAAg");
	this.shape.setTransform(44.7,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKASQgFgDgDgEQgDgFAAgGQAAgFADgEQADgGAFgCQAFgCAFgBQAGABAEACQAGACACAGQADAEABAFQgBAGgDAFQgCAEgGADQgEADgGAAQgFAAgFgDgAgFgJQgCABgCADQgCADABACQgBADACAEQACACACACQADABACAAQADAAADgBIAEgEQABgEAAgDQAAgCgBgDIgEgEQgDgCgDAAQgCAAgDACg");
	this.shape_1.setTransform(37.9,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIAUIAAgRIgPAAIAAARIgKAAIAAgnIAKAAIAAAQIAPAAIAAgQIAKAAIAAAng");
	this.shape_2.setTransform(32.9,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIAUIAAgeIgPAAIAAAeIgKAAIAAgnIAjAAIAAAng");
	this.shape_3.setTransform(28.1,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAbIgDgBIgBgBIADgHIABAAIABABIADABIAEgCIADgDIACgEIgRgmIALAAIAIAXIAAADIAAABIAAAAIAAAAIAAgBIABgCIAIgYIALAAIgSAsQgCAGgCADQgEACgEAAIgFgBg");
	this.shape_4.setTransform(23.5,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAUIAAgeIgNAAIAAgJIAjAAIAAAJIgNAAIAAAeg");
	this.shape_5.setTransform(19.4,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHASQgFgDgDgEQgDgFAAgGQAAgFADgEQADgFAFgDQAEgCAFgBQAFAAADACQAFABADADIgFAIIgEgEIgHgBQgCAAgCACIgEAEQgCADABACQgBADACADQACADACACQACABADAAQAEABACgCIAGgEIAEAHQgDAEgFABQgEACgFAAQgFAAgEgDg");
	this.shape_6.setTransform(15.2,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKASQgFgDgDgEQgDgFAAgGQAAgFADgEQADgGAFgCQAFgCAFgBQAGABAEACQAGACACAGQADAEABAFQgBAGgDAFQgCAEgGADQgEADgGAAQgFAAgFgDgAgFgJQgCABgCADQgCADABACQgBADACAEQACACACACQADABACAAQADAAADgBIAEgEQABgEAAgDQAAgCgBgDIgEgEQgDgCgDAAQgCAAgDACg");
	this.shape_7.setTransform(10.5,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASAiIAAgLIgjAAIAAALIgJAAIAAgUIAGAAQADgGACgGIACgKIABgMIAAgNIAhAAIAAAvIAGAAIAAAUgAgCgTIgBALIgCALQgCAGgDAFIAVAAIAAgmIgNAAg");
	this.shape_8.setTransform(4.8,7.2);

	this.instance = new lib.Symbol2();
	this.instance.setTransform(26.4,29.8,1,1,0,0,0,13.1,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.8,43);


// stage content:
(lib.ulmart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Symbol10();
	this.instance.setTransform(173,147.8,1,1,0,0,0,165,145.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160).to({_off:false},0).to({alpha:1},9).wait(71).to({alpha:0},8).to({_off:true},1).wait(4));

	// Слой 3
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(100.5,124.5,1,1,0,0,0,86.5,117.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({_off:false},0).to({alpha:1},8).wait(45).to({alpha:0},9).to({_off:true},1).wait(83));

	// Название ноута
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(130,35.3,1,1,0,0,0,115,26.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(130,35.3,1,1,0,0,0,115,26.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).to({_off:true,alpha:1},8).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},8).wait(36).to({alpha:0},8).to({_off:true},1).wait(137));

	// Ноутбук
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(139.3,138.2,1,1,0,0,0,109.8,76.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(139.3,138.2,1,1,0,0,0,109.8,76.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).to({_off:true,alpha:1},8).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},8).wait(89).to({scaleX:0.81,scaleY:0.81,x:102.4,y:106.7},9).wait(84));

	// Слоган 1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(151.4,43.7,1,1,0,0,0,136.6,37.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({alpha:1},10).wait(36).to({alpha:0},8).to({_off:true},1).wait(181));

	// Юлмарт
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(270.2,264.7,1,1,0,0,0,29.9,21.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).to({alpha:1},10).wait(213).to({alpha:0},8).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
