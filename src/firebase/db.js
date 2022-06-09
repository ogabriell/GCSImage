import {db} from 'conf.js'
import { collection, getDocs } from 'firebase/firestore/lite';


async function getId(db){
    let col = collection(db, 'id')
    let snap = await getDocs(col)
    return snap
}

console.log(getId(db))