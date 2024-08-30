function eu (f2: any, f3: any){
    let x: string = f2(f3)
    console.log("eu", x);
}

function f2 () {
    console.log("quero", f3);
}

function f3 () {
    console.log("sair", eu);
}

eu(f2,f3);

////////////////

//    function eu(f2: () => string) {
//      let x: string = f2();
//        console.log("eu", x);
//    }

//    function f2(): string {
//        console.log("quero");
//        f3();
//        return "resultado";
//    }

//    function f3(): void {
//        console.log("sair");
//    }

//    eu(f2);