Q-1 . What are some differences between interfaces and types in TypeScript?


interfaces:TypeScript-এ type হলো ডেটার ধরন বা structure define করার একটি উপায়।
1.মূলত object/class structure define করতে ব্যবহৃত হয়।
2.Interface অন্য interface extend করতে পারে।
3.একই নামের interface multiple declare করলে TypeScript এগুলো merge করে দেয়।
4.object বা class structure-এর জন্য সহজ ও readable।
5. interface Person {
  name: string;
  age: number;
}

Type: Interface এর মতোই type object, array, function ইত্যাদি structure describe করতে পারে।
1.Type দিয়ে object, primitive, union ইত্যাদি define করা যায়।
2.Type অন্য type extend করতে intersection (&) ব্যবহার করতে হয়।
3.একই নামে type পুনরায় declare করতে গেলে error হয়।
4.Type: object ছাড়াও primitive, union, tuple, function ইত্যাদি define করতে বেশি flexible।
5. type User = { name: string; age: number };
type Admin = User & { role: string };


Q-2. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof একটি TypeScript keyword যা একটি object type-এর সমস্ত property name নিয়ে একটি union type তৈরি করে। keyof object type-এর keys কে type হিসেবে ব্যবহার করার জন্য ব্যবহৃত হয়।

example : 
interface Person {
  name: string;
  age: number;
  email: string;
}

( keyof ব্যবহার করলে union type তৈরি হবে"name" | "age" | "email")
type PersonKeys = keyof Person;

let key1: PersonKeys;

key1 = "name"; 
key1 = "age";  
key1 = "email"; 