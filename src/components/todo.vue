<template>
    <div>
        <div class="container pt-5">
            <h1 class=" text-center todo ">#todo</h1>
            <div class="row pt-4 d-flex justify-content-center">
                <div class="col-lg-2 offset-lg-1">
                    <button class="btn allbtn" @change="show('all')" @click="show('all', '')" :class="{marker: all === true}" >All</button>
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <button class="btn activebtn" @change="show('active')" @click="show('active', false)"  :class="{marker: type === false}">Active</button>
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <button 
                    class="btn completedbtn " 
                    @change="show('completed')"   @click="show('completed', true)" :class="{marker: type === true }">Completed</button>
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
                        <li :class="{completed: task.completed}" v-if="statusTask === 'all' ">
                            <input type="checkbox"  :id="task.taskId" :value="task.taskId" v-model="checkbox" @click="check()" @change="check()" >
                          Tarea: {{task.text}}
                        </li>
                        <li :class="{completed: task.completed}" v-if="(statusTask === 'active') && (task.completed === false)">
                            <input type="checkbox"  :id="task.taskId" :value="task.taskId" v-model="checkbox" @click="check()" @change="check()" >
                           Tarea: {{task.text}}
                        </li>
                        <li  v-if="(statusTask === 'completed') && (task.completed === true) ">
                          Tarea: {{task.text}}
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
                contador: 1,
                statusTask: "all",
                all: true, 
                type: Boolean

            }
        },
        methods: {
            addTask() {
                let task = {
                    taskId: this.contador++,
                    text: this.newTask,
                    completed: false
                }
                if (this.newTask != "") {
                    this.tasks.push(task)
                     this.newTask = ""
                }
            },
            check(e){
    

                for (let i = 0; i < this.tasks.length; i++) {
                   
                   for (let j = 0; j < this.checkbox.length; j++) {
                     
                     if (this.checkbox[j] === this.tasks[i].taskId) {

                        this.tasks[i].completed = !this.tasks[i].completed
                     }   
                   }
                }
            },
            show(status, boolean){
                this.statusTask = status;
                console.log(this.statusTask)
                
                if (boolean === "") {
                    this.all = true
                    this.type= ""
                }else if (boolean === false) {
                    this.type = boolean
                    this.all = false
                }else if (boolean === true) {
                    this.type = true
                    this.all = false
                }
               return this.statusTask
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
    
    background: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #333333;
}

.marker{
border-bottom:solid #2F80ED;    
}

</style>