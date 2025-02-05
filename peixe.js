
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

var peixinho;

function preload(){
  this.load.image('mar', 'assets/bg_azul-escuro.png');

  this.load.image('logo', 'assets/logo-inteli_branco.png');
  
  this.load.image('peixe', 'assets/peixes/peixe_turquesa.png');

  this.load.image('alga', 'assets/alga.png');
  this.load.image('alga2', 'assets/alga2.png');
}

function create(){

  this.add.image(400,300,'mar');

  this.add.image( 400, 525, 'logo').setScale(0.5);
  this.add.image( 250,500,'alga');
  this.add.image( 525,500,'alga2');

  peixinho = this.add.image( 400, 300, 'peixe');
  peixinho.setFlip(true,false);
}

function update(){

  peixinho.x = this.input.x;
  peixinho.y = this.input.y;

}

