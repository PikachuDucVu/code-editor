import CodeEditor from "./components/CodeEditor";
import { Folder } from "./utils/types";
import { FolderContext, useFolder } from "./components/context/FolderContext";
import { FolderTree } from "./components/FolderTree";

// Sample file structure
const mockupFolder: Folder = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "models",
          type: "folder",
          children: [
            {
              name: "User.ts",
              type: "file",
              content: `export interface User {
  id: number;
  name: string;
  email: string;
}`,
            },
            {
              name: "Product.ts",
              type: "file",
              content: `export interface Product {
  id: number;
  name: string;
  price: number;
}`,
            },
          ],
        },
        {
          name: "services",
          type: "folder",
          children: [
            {
              name: "UserService.ts",
              type: "file",
              content: `import { User } from '../models/User';

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
      this.users.push(user);
  }

  getAllUsers(): User[] {
      return this.users;
  }
}`,
            },
            {
              name: "ProductService.ts",
              type: "file",
              content: `import { Product } from '../models/Product';

export class ProductService {
  private products: Product[] = [];

  addProduct(product: Product): void {
      this.products.push(product);
  }

  getAllProducts(): Product[] {
      return this.products;
  }
}`,
            },
          ],
        },
        {
          name: "utils",
          type: "folder",
          children: [
            {
              name: "helpers.ts",
              type: "file",
              content: `export function sum(a: number, b: number): number {
  return a + b;
}`,
            },
            {
              name: "validators.ts",
              type: "file",
              content: `export function isEmailValid(email: string): boolean {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}`,
            },
          ],
        },
        {
          name: "index.ts",
          type: "file",
          content: `import { UserService } from './services/UserService';
import { ProductService } from './services/ProductService';

const userService = new UserService();
const productService = new ProductService();

console.log('Services initialized.');`,
        },
      ],
    },
    {
      name: "README.md",
      type: "file",
      content: `# TypeScript Project Mockup\n\nThis is a simple mockup of a TypeScript project folder structure.`,
    },
  ],
};

function App() {
  const folder = useFolder(mockupFolder);

  return (
    <div className="flex h-full w-full text-white dark bg-black">
      <FolderContext.Provider value={folder}>
        <div className="w-1/5 h-full ">
          <FolderTree folder={folder} />
        </div>

        <div className="flex-1 h-full text-white">
          <CodeEditor />
        </div>
      </FolderContext.Provider>
    </div>
  );
}

export default App;
