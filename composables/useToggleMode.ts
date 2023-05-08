const useToggleMode = () => {
  const isDarkMode = useState("darkMode", () => true);

  const toggleMode = () => {
    isDarkMode.value = !isDarkMode.value;
  }

  return {
    isDarkMode,
    toggleMode
  }
}

export default useToggleMode;