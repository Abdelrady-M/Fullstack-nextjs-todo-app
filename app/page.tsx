import { getUserTodoListAction } from "@/actions/todo.action";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default  async function Home() {
  const {userId} =  auth()
  const todos = await getUserTodoListAction({userId})
  return (
    <main className="container">
     <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4">
        <AddTodoForm userId={userId}/>
        <TodosTable todos={todos}/>
     </div>
    </main>
  );
}
