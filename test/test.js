// // a=[-1,2,3,5,8];
// // function(a){
// //     a.sort()
// //     return(a)
// // }

// class EventEmmiter {
//     constructor(){
//         string=this.string
//         obj=this.obj
//     }

//     emit(string){
//        obj.string.forEach(element => {
//          element()  
//        }); 
//     }
//     on(string,cb){
//         if(obj.string){
//     obj.string.push(cb) 
//         }
//         else{
//             obj.string=[cb]
//         }
       
//     }
//     off(string){
//       delete obj.string  
//     }

// }

// // let emmiter


// // EventEmmiter‏
// // .on(string, func)
// // .off(string)
// // .emit(string)
// // ‏
// // emmiter = EventEmmiter()

// // emmiter.on(“Do A”, A() {print “Hello ”})
// // emmiter.on(“Do A”, Another() {print “World”}) 
// // emmiter.on(“Do B”, B() {print “Bannana”})

// // emmiter.emit(“Do A”)
// // emmiter.emit(“Do B”)

function generateSeries() {
    let i = 0;
    return () => {
      const tmp = i;
      i++;
      return tmp;
    }
  }
  
  const runner = generateSeries();
  for (let i=0;i<5;i++) {
    runner();
  }
  
  console.log(runner());