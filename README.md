# UA-CAR 🚗

![grafico_funciones_uacar](https://github.com/user-attachments/assets/e0fa9647-3c83-439b-a893-e3c8a6c1c346)

**First closed beta version of UA-CAR.**  
- Real-time Wi-Fi robot control.  
- Directional movement buttons.  
- Optimized for phones and tablets.

UA-CAR is a mobile app built with **React Native** and **Expo** to remotely control an ESP8266-based robotic car via Wi-Fi.

## 📱 Features

- Control movement: Forward, Backward, Left, Right
- Touch buttons trigger `/start` and `/stop` commands to the ESP8266
- Built with React Native + Expo for cross-platform simplicity

## 🛠️ Technologies Used

- React Native
- Expo
- JavaScript
- ESP8266 (NodeMCU)
- Wi-Fi HTTP communication

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ua-car.git
cd ua-car
```

### 2. Install dependencies

```bash
yarn install
```

---

## 🧰 EAS CLI Setup (Required before building)

### ✅ Step 1: Install EAS CLI (if not already installed)
```bash
npm install -g eas-cli
```

### ✅ Step 2: Log in to your Expo account
```bash
eas login
```

### ✅ Step 3: Configure EAS Build (only once)
```bash
eas build:configure
```
This will update your project to be ready for compilation (it already looks properly configured with "extra.eas.projectId" in your app.json).

---

## 🚀 Building the APK and AAB

You need an [Expo account](https://expo.dev/signup) and [EAS CLI installed](https://docs.expo.dev/eas/).

### ✅ Generate APK (for installing on devices)

```bash
eas build -p android --profile preview
```

🔗 After the build, Expo will provide you with a link to download the `.apk` file.

📄 More info: [Generate APK with Expo](https://docs.expo.dev/build-reference/apk/)

---

### ✅ Generate AAB (for Google Play Store)

```bash
eas build -p android --profile production
```

🔗 After the build, Expo will provide a `.aab` file for publishing.

📄 More info: [Generate AAB with Expo](https://docs.expo.dev/build-reference/aab/)

---

## 📸 App Preview

![captura_celular_x2](https://github.com/user-attachments/assets/5ec5ba15-0a51-4efa-acbe-42189fde85cf)

---

## 📱📶 Network Configuration

Make sure your ESP8266 is set to `http://192.168.4.1` or modify `ESP8266_IP` in `App.js` to match your device's IP.

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).
