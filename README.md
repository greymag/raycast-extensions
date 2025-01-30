# Raycast Extensions Repository

This repository contains multiple **Raycast extensions** developed for various utilities and workflows.

## 📌 Available Extensions

| Extension Name                                   | Description                                        |
|--------------------------------------------------| -------------------------------------------------- |
| [Convert Android Size](./android-size-converter) | Convert between PX and DP for Android development. |

## 🚀 Installation & Setup

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

Navigate to the specific extension folder and install dependencies:

```sh
cd <extension-folder>
npm install
```

### 3. Run an Extension in Development Mode

Inside the specific extension folder, run:

```sh
npm run dev
```

This allows you to test the extension inside Raycast.

## 🔧 Building & Adding Extensions Locally

### 1. Build an Extension

```sh
npm run build
```

### 2. Load the Extension in Raycast

1. Open **Raycast**.
2. Input and select **Import Extension**.
3. Select the project folder where `package.json` is located.

#### Notes

Sometimes you may need to build the extension again after importing it into Raycast.

## 🛠 Managing Multiple Extensions

Each extension has its own folder. To manage an extension:

1. **Navigate to the extension folder** before running commands.
2. **Keep dependencies isolated** within each extension.
3. **Follow naming conventions** to keep extensions organized.

## 📄 License

The code in this repository is provided **as is**, without any guarantees or warranties. The author does **not** take any responsibility for any issues, damages, or consequences resulting from the use of this code.
