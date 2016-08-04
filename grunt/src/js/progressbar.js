var ractive = new Ractive({
    el: document.body,
    template: '#template',
    data: {
        progressbars: [
            { name: 'progress#1', value: 0 },
            { name: 'progress#2', value: 0 },
            { name: 'progress#3', value: 0 }
        ],
        amounts: [ +25, +10, -10, -25 ],
        default_value: 0,
        min_range: 0
    },
    adjust: function ( d ) {
        var selected = this.get( 'selectedProgress' );
        if ( selected == null ) return;
        
        var keypath = 'progressbars[' + selected + '].value';
        
        d = d + this.get(keypath);
        
        if(d < 0)	{
          this.animate(keypath, 0, {
          duration: 400,
          easing: 'easeOut'
          });
        }
        else {
          this.animate(keypath, d, {
          duration: 400,
          easing: 'easeOut'
          });
        }
    }
});
