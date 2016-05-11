var Parallax = (function() {
    function Parallax(config) {
      var key;
      this.config = {
        selector: ".parallax",
        speed: .4
      };
      for (key in config) {
        this.config[key] = config[key];
      }
      this.sections = document.querySelectorAll(this.config.selector);
      this.update();
      window.onscroll = (function(_this) {
        return function() {
          return _this.update();
        };
      })(this);
    }

    Parallax.prototype.update = function() {
      var i, len, ref, results, section;
      ref = this.sections;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        section = ref[i];
        if (this.isVisible(section)) {
          results.push(this.setPosition(section));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Parallax.prototype.isVisible = function(section) {
      var height, offset, scroll;
      scroll = window.pageYOffset;
      offset = section.offsetTop;
      height = section.offsetHeight;
      if (((offset + height) >= scroll) && (offset <= (scroll + window.innerHeight))) {
        return true;
      }
    };

    Parallax.prototype.setPosition = function(section) {
      var offset, position, scroll;
      scroll = window.pageYOffset;
      offset = section.offsetTop;
      position = Math.floor((scroll - offset) * this.config.speed);
      return section.style.transform = "translateY(" + (position) + "px)";
    };

    return Parallax;

  })();

  new Parallax();
