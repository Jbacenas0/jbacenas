import { View, Text, TextInput, TouchableOpacity, FlatList,} from 'react-native'
import React, {useState} from 'react';
import { IconButton } from "react-native-paper";
import Fallback from './components/Fallback';

const dummyData =[{
    id: "01",
    title: "Watch Movies",
},{
    id: "02",
    title: "Play Basketball",
}]

console.log(Date.now().toString())

const TodoList = () => {

    const[todo, setTodo] = useState("");
    const[todolist, setTodoList] = useState ([])
    const[editedTodo, setEditedTodo] = useState(null)


    const handleAddTodo = () =>{


        {
            setTodoList([...todolist, {id: Date.now().toString(), title: todo}])
            setTodo("");
        }
    }
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todolist.filter((todo)=> todo.id !== id)

        {
            setTodoList(updatedTodoList)
        }
    }
    const handleEditTodo= (todo)=>{

        setEditedTodo(todo)
        setTodo(todo.title)

    }
    const handleUpdateTodo = ()=>{
        const updatedTodos = todolist.map((item)=>{
            if(item.id === editedTodo.id){
                return {...item, title: todo}
            }
            return item

        })
        setTodoList(updatedTodos)
            setEditedTodo(null)
            setTodo("");
    }


    const renderTodo = ({ item, index }) => {
    return (
        <View style={{
            backgroundColor: "#1e90ff",
            borderRadius: 6,
            paddingHorizontal: 6,
            paddingVertical: 12,
            marginBottom: 12 ,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 1,
        }}> 
            
            <Text style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "800",
                flex: 1,
            }}>
                {item.title}
            </Text>
            <IconButton icon="pencil" iconColor='#fff' onPress={()=>handleEditTodo(item)}/>
            <IconButton icon="trash-can" iconColor='#fff' onPress={()=>handleDeleteTodo(item.id)}/>

        </View>
    )
    }
  return (
    <View style={{
        marginHorizontal: 5,
        paddingTop: 20,
        height: 800,
        backgroundColor: "yellow"
    }}>
      <Text style={{color: "black", marginVertical: 12, fontSize: 50, fontWeight: "bold",}}>To do List</Text>
      <TextInput
      style={{borderWidth: 2,
        borderColor: "black",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        fontSize: 25,
    }}
        placeholder='Add Task'
        value={todo}
        onChangeText={(userText)=>setTodo(userText)}
        />
        {
            editedTodo ? <TouchableOpacity style={{ backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 24,
            alignItems: "center",
    
            }}
            onPress={()=> handleUpdateTodo()}
            >
                <Text style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 20 }}>Save</Text>
    
            </TouchableOpacity> : <TouchableOpacity style={{ backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 12,
        marginVertical: 24,
        alignItems: "center",

        }}
        onPress={()=> handleAddTodo()}
        >
            <Text style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20 }}>Add</Text>

        </TouchableOpacity>
        }

        {/*Render todo list*/}
        <FlatList data = {todolist} renderItem={renderTodo}/>
        {
            todolist.lenth <= 0 && <Fallback />
        }
    </View>
  );
};

export default TodoList;