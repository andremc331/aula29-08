function var_args(...x:any){
     console.log(x[0]);
     console.log(x[1]);
 }
 
var_args(1, "Rodrigo");

//class Usuario{
  nome:string;

  constructor(x:string){
    this.nome = x;
  }
  static xyz:string = '3';
  static my_operation(){
    console.log("blablabla");
  }
}

//let u = new Usuario("Gabriel");
//let u2 = new Usuario("Paulo");

console.log(u.nome);
console.log(u2.nome);
console.log(Usuario.xyz);

//Usuario.my_operation();

  //console.log(var_args(3,4));
 
 
 /// return x[0]+x[1];