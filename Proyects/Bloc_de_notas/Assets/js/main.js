class TaskManager{
    tasks = []; //Arreglo
    lastId = 0;
    tagTasks = null;
    tagText = null;
    nameLabelStorage = "tasks";

    constructor (tagTasks, tagText){
        this.tagTasks = tagTasks;
        this.tagText = tagText;
        //Verifico si funciona el objeto
        //console.log("Hola, soy el constructor!");
        //llamo el atributo id del elemento
        //console.log(this.tagTasks.id);
        //llamo la clase del elemento
        //console.log(this.tagTasks.className);
        if(localStorage.getItem(this.nameLabelStorage) !== null){
            this.tasks = JSON.parse(localStorage.getItem(this.nameLabelStorage));
            this.id = this.tasks.length > 0 ?
                        this.tasks[this.tasks.length-1].id : 0;
            
        }
    }

    add(){
        //Autoincrementable el elemento
        this.lastId++;
        //{} un objeto vacio
        this.task.push({
            id: this.lastId,
            //Con value voy a acceder al texto que esta dentro del textarea
            text: this.tagText.value
        });
        localStorage.setItem(this.nameLabelStorage, JSON.stringify(this.tasks));
        //Para eliminar el contenido una vez insertado
        this.tagText.value = "";
        this.tagText.focus();
        this.refresh();
    }
    //metodo
    refresh(){
        this.tagTasks.innerHTML = "";
        //Recorer los elementos
        this.task.forEach(element => {
            //console.log(element.text);
            let div = document.createElement("div");
            let divRemove = document.createElement("div");
            let buttonRemove = document.createElement("input");

            //div por cada elemento
            div.innerHTML = element.text;
            //div del boton
            divRemove.className = "divButton";
            buttonRemove.className = "btn-danger";
            buttonRemove.type = "button";
            buttonRemove.addEventListener("click", function (){
                console.log("Eliminar "+ element.id);
            });

            divRemove.appendChild(buttonRemove);
            div.appendChild(divRemove);


            //Propiedades del boton
            buttonRemove.value = "X";
            //Agregar elemento
            this.tagTasks.appendChild(div);
        });


    }
}