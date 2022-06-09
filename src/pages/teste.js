import db from '../firebase/conf'
import { collection, getDocs, doc } from 'firebase/firestore/lite';

export default function Teste() {

    async function getId(db){
        let col = await collection(db, 'id/gabriel/img')
        let snap = await getDocs(col)
        //let data = snap.docs.map(doc => doc.data())
        let data = snap.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
          
        return //data
    }
    //console.log(getId(db).name)
    getId(db)

    return(
        <h1>TESTE...</h1>
    )

}
