import { Column, Entity } from "typeorm";


@Entity({ name: 'users'})
class User {

   @Column()
   phone_number:string
}

export default User;

