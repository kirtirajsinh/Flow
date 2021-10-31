try{

    self.importScripts('firebase/firebase-app.js', 'firebase/firebase-auth.js', '')
    const firebaseConfig = {
        apiKey: "AIzaSyDisDU10YiGanAXJTAHo9YfNcto7mJ_1oo",
        authDomain: "flow-95081.firebaseapp.com",
        projectId: "flow-95081",
        storageBucket: "flow-95081.appspot.com",
        messagingSenderId: "731078559502",
        appId: "1:731078559502:web:bbc618fd1df23a1092b95f",
        measurementId: "G-GZJPKWNJ9J"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
      console.log(app);
}catch(e){
    alert(e);
}