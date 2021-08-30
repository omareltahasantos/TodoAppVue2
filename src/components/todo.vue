<template>
    <div>
        <div class="container pt-5">
            <h1 class=" text-center todo ">#todo</h1>
            <div class="row pt-4 d-flex justify-content-center">
                <div class="col-lg-2 offset-lg-1">
                    <button class="btn allbtn" @click="mostrar('Todas')">All</button>
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <button class="btn activebtn" @click="mostrar('incompleta')">Active</button>
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <button 
                    class="btn completedbtn " 
                    @click="mostrar('completa')">Completed</button>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-lg-5 offset-lg-3">
                      <input 
                      v-model="newTask" 
                      type="text" class="form-control" 
                      placeholder="Enter tasks" />
                </div>
                <div class="col-lg-2">
                 <button 
                 @click="addTask()"
                 type="button" 
                 class="btn btn-outline-primary insertar">Insertar</button>
                </div>
            </div>

            <div class="row pt-5">
                <div class="col-lg-4 offset-lg-3" >
                    <ul v-for="task, index in tasks" :key="index">
                        <li :class="{completed: task.completed}">
                            <input type="checkbox"  :id="task.taskId" :value="task.text" v-model="checkbox" @click="check()" @change="check()" >
                            Id: {{task.taskId}} Tarea: {{task.text}}
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                checkbox: [],
                newTask: "",
                tasks: [],
                contador: 1
            }
        },
        methods: {
            addTask() {
                let task = {
                    taskId: this.contador++,
                    text: this.newTask,
                    completed: false
                }
                 this.tasks.push(task)
            },
            check(e){
    

                for (let i = 0; i < this.tasks.length; i++) {
                   
                   for (let j = 0; j < this.checkbox.length; j++) {
                     
                     if (this.checkbox[j] === this.tasks[i].text) {

                        this.tasks[i].completed = !this.tasks[i].completed
                     }   
                   }
                }
            }
         }
        }
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: grey;
}
#unCompletedTask{
            text-decoration:none;

}
#completedTask{
        text-decoration:line-through;

}
#flexCheckDefault{
    border: 1px solid #828282;
box-sizing: border-box;
border-radius: 4px;
}
.taskLi{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #000000;
}
.tasksul{
    list-style: none;
}
.insertar{
    background: #2F80ED;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
  
    color: #FFFFFF;
}
.todo{
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: -0.045em;
    color: #333333;
}

.allbtn{
      border-bottom:solid #2F80ED;
    background: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #333333;
}

.activebtn{
    border-bottom:solid #2F80ED;
    background: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #333333;
}

.completedbtn{
    border-bottom:solid #2F80ED;
    background: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #333333;
}

</style>