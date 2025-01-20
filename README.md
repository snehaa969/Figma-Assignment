# **Technical Details**

## **Framework and Libraries**
- **Framework:** React.js for building the user interface.  
- **Styling:** Tailwind CSS for responsive and consistent design.  

---

## **Data Simulation**
- **Data Source:** A JSON file (`mockData.json`) is used as a mock database for simulating real-world data fetching and filtering.

---

## **Real-Time Search**
- **Dynamic Filtering:** Utilizes state management to dynamically filter and display results as the user types.  
- **Performance Optimization:** Implements a **debouncing mechanism** for improved performance.  

---

## **Tab Filtration**
- **Dynamic Tabs:** Tabs are dynamically created from categories in the mock database.  
- **Category Filtering:** Filters displayed data based on the selected tab.  

---

## **Evaluation Criteria**

### **Functionality**
- Ensures the **accuracy and effectiveness** of real-time search and tab filtration.

### **Code Quality**
- Code is **clean, well-structured, and maintainable**, adhering to best practices.

### **Design Implementation**
- Precisely follows the provided **Figma design** for styling and layout.

### **Responsiveness**
- Maintains **consistent and seamless functionality** across desktop and mobile devices.

### **Performance**
- Demonstrates **high-speed responsiveness**, especially for real-time search functionality.

---

## **Deployment**

### **1. Setup Netlify Account**
1. Go to [Netlify](https://www.netlify.com) and create an account.
2. Connect your **GitHub**, **GitLab**, or **Bitbucket** account.

### **2. Import Project**
1. Click on the **"Add new site"** button and select **"Import an existing project"**.
2. Import the repository containing your React project.

### **3. Configure Build Settings**
Ensure the following build settings are correct:
```bash
Build Command: npm run build
Publish Directory: build
```

### **4. Deploy**
1. Click **"Deploy site"** and wait for the build process to complete.  
2. Once deployed, you will receive a **deployment URL**.

### **5. Access Deployed Application**
Your deployed application will be accessible at the provided URL:  
`https://your-project-name.netlify.app`

---

### **Deployment Link**
```
https://figma-assignment-sneha.netlify.app/
```
![image](https://github.com/user-attachments/assets/78fd9814-9932-446a-a6c6-e6d4bcfcdfd2)

### **How to Run Locally**
To run the application on your local machine:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
