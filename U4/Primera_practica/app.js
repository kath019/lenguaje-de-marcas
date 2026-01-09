/***************
 1. seleccionar elementos del DOM
 ***************/
const form = document.querySelector("#formTarea")
const lista = document.querySelector("#listaTareas")


const btnTodas = documents.querySelector("#mostrarTodas")
const btnCompletadas = documents.querySelector("#mostrarCompletadas")
const btnPendientes = documents.querySelector("#mostrarPendientes")


/***************
 2. Añadir elementos a la lista
 ***************/
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const tarea = form.tarea.value.trim();

    if(tarea === ""){
        alert("No puedes añadir una tarea vacía.")
        return;
    }

    const newLi = document.createElement("li");
    newLi.textContent = tarea;
    lista.appendChild(newLi);
    form.requestFullscreen();

    form.reset();
    //Acceder al input con name="tarea" y poner el foco
    form.tarea.focus();

})

/***************
3. Marcar / Desenmarcar elementos de la lista
***************/
lista.addEventListener("click",(event)=>{
    if(event.target.matches("li")){
        event.target.classList.toggle("completada")

    } 
})

document.querySelector("#eliminarCompletadas").addEventListener("click",()=>{
    const completadas = document.querySelectorAll(".completadas");
    
    if(completadas.length === 0 ) return;

    const seguro = confirm("¿Eliminar todas las tareas completadas?")
    if(!seguro) return;
    
    completadas.forEach((li)=>{
        li.remove()
    })
})


//FILTRAR ELEMENTOS
btnTodas.addEventListener("click",()=>{
    marcarBotonActivo(btnTodas)
})

btnCompletadas.addEventListener("click",()=>{
    marcarBotonActivo(btnCompletadas)
    lista.querySelectorAll("li").forEach((li)=>{
        if(!li.classList.contains("completada")){
            li.classList.remove("ocultar")
        } else {
            li.classList.remove("ocultar")
        }
    })
})

btnPendientes.addEventListener("click",()=>{
    marcarBotonActivo(btnPendientes)
    lista.querySelectorAll("li").forEach((li)=>{
        li.classList.toggle("ocultar", li.classListcontains("completada"))
    })
})

function marcarBotonActivo(btn){
    [btnTodas, btnCompletadas, btnCompletadas].forEach((b)=>{
        b.classList.toggle
    })
}

