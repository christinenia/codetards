var calculator = {
    calcArea: $('<div>',{id: 'calcArea'}),
    buttons: $('<div>',{id: 'buttonArea'}),
    textArea: $('<input>',{type: 'text', id: 'calcText', readonly: true}),
    calcStack: null,
    prevEq: null,
    body: $('body'),
    init: function(){
        var self = this;
        self.createInterface();
        $('button').click(function(e){
            self.clickButton(e.currentTarget)
        })
    },
    createInterface: function(){

        this.buttons.append(this.textArea);

        for(var i = 1; i <= 10; i++){
            this.buttons.append($('<button>',{text: (i==10?0:i), class: 'button'}))
        } 

        this.buttons.append($('<button>',{text: '+', class: 'button'}))
        this.buttons.append($('<button>',{text: '-', class: 'button'}))
        this.calcArea.append(this.buttons);
        this.body.append(this.calcArea);
    },
    clickButton: function(obj){
        var html = obj.innerHTML;
        var operator = false;

        if(html == '+' || html == '-'){
            if(this.calcStack == '+' || this.calcStack == '-' || this.calcStack == null){
                alert('error cannot do that!');
                return;
            }
            operator = true;
        }
        if(this.calcStack == '+'){
            html = parseInt(html) + parseInt(this.prevEq);
            operator = true;
            console.log('adding')
        }
        if(this.calcStack == '-'){
            html = parseInt(html) - parseInt(this.prevEq);
            operator = true;
            console.log('subtracting')
        }
        this.prevEq = this.calcStack;
        this.calcStack = (operator?html:((this.calcStack!=null?this.calcStack:'') + html));
        console.log('you clicked:', html, this.prevEq);
        this.textArea.val(this.calcStack)
    }
} 

calculator.init();