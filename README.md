# Micro_FrontEnd_Case

## Frontend Developer Case Study

This case study is designed to evaluate frontend developers' ability to build a project using modern frameworks such as React and Next.js, while adhering to SOLID principles and the 12-Factor methodology. The project will incorporate component-based architectural approaches, micro frontend structures, and state management solutions like RTK Query.

### Project Requirements

#### 1. Technologies Used
- **Frameworks**: React and Next.js
- **UI Library**: Ant Design
- **Programming Language**: TypeScript, JavaScript
- **State Management**: RTK Query
- **API**: Fake Store API
- **Micro Frontend Architecture**: Webpack 5 Module Federation
- **Design Reference**: E-Commerce Template

#### 2. Architectural Structure

**Host Application (Next.js)**
- The host application will be built with Next.js and will integrate remote applications.
- The product list will be fetched from the API and will interact with the remote basket application.

**Remote Applications**
- **Products Remote**
  - Developed using Next.js.
  - Retrieves products from the API and communicates with the host application.
- **Basket Remote**
  - Developed using React in a micro frontend structure.
  - Displays selected products received from the host application.

#### 3. Technical Requirements

**12-Factor Application**
- **Codebase**: All applications must be sourced from a centralized repository.
- **Dependencies**: All dependencies should be defined in the package.json file.
- **Configuration**: Managed through environment variables.
- **Backing Services**: APIs and state management should be decoupled.
- **Build & Run Separation**: The build and runtime processes must be distinct.
- **Stateless Processes**: All components should be stateless.
- **Port Independence**: The host and remote applications should run on separate ports.
- **Concurrency**: The application should be horizontally scalable.
- **Disposability**: The app should release resources properly upon termination.
- **Dev/Prod Parity**: Differences between test and production environments should be minimal.
- **Logs**: The application should output logs in a standardized format.
- **Admin Processes**: Dedicated processes should be available for debugging and development.

**SOLID Principles**
- **Single Responsibility Principle**: Each component should have only one responsibility.
- **Open/Closed Principle**: Components should be open for extension but closed for modification.
- **Liskov Substitution Principle**: Subclasses should replace their base classes without issues.
- **Interface Segregation Principle**: Clients should not be forced to depend on unused interfaces.
- **Dependency Inversion Principle**: High-level modules should not depend on low-level modules.

**Higher-Order Components (HOC)**
- You are expected to use HOCs to handle shared behavior across components.

### Expected Outcome
- The host application should list products from the products remote.
- The basket remote should display selected products received from the host application.
- RTK Query should be used to optimize API requests.
- The micro frontend structure should function seamlessly.
- The project should strictly follow SOLID principles and the 12-Factor methodology.
- The UI should be responsive, following the provided Figma design reference.

### Documentation

**Code Documentation**
- Include comments explaining important decisions, especially regarding responsive design.

**README File**
- The README.md file should contain:
  - Instructions for installation, running, and deployment of the application.
  - A link to the GitHub repository.

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/micro_frontend_case.git
   cd micro_frontend_case
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

### Running the Project

1. **Start the host application**
   ```sh
   cd host-app
   npm run dev
   ```

2. **Start the product remote application**
   ```sh
   cd ../product-app
   npm run dev
   ```

3. **Start the basket remote application**
   ```sh
   cd ../basket-app
   npm start
   ```

4. **Start the JSON server**
    Use it as a database.

    ```sh
    # Install json-server globally if not already installed
    npm install -g json-server
    ```
    
    ```sh
    cd ../json-server
    json-server --watch db.json --port 5000
    ```
    



 

### Deployment












