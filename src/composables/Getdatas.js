import { ref } from "vue";


export function Getdatas() {
    const users = ref([]);
    const user = ref();
    const posts = ref([])
    const isloading = ref(true);
    const pisloading = ref(true);
    const error = ref(null);
    const perror = ref(null);

    // fetch all user datas
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            users.value = await response.json();
            isloading.value = false;
        }
        catch (err) {
            error.value = err.message;
            
        }finally {
            isloading.value = false;
          }

    };

    // fetching user details 
    // const getUser =(userId)=>{
    // user.value =users.value.find((u)=>u.id===parseInt(userId,10));
       
    // };
    const getUser = async (userId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            user.value = await response.json();
            isloading.value = false;
        }
        catch (err) {
            error.value = err.message;
            isloading.value = false;
        }

    };

    // fetch user posts
    const fetchUserPosts = async(userId)=>{
        try{
            const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            posts.value = await postResponse.json();
            pisloading.value=false;
        }
        catch(err){
            perror.value = err.message;
            pisloading.value = false;
        }
    }

    return { users, isloading,pisloading, error,perror, fetchUsers,user,posts,getUser,fetchUserPosts };
}