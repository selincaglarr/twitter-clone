module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkmode:false,
  theme: {
    extend: {
      colors:{
        primary:{
          base:"hsl(202,86%,53%)",
          deark:"hsl(203,86%,46%)",
          light:"hsl(203,86%,96%)"
        },
        gray:{
          dark:"#657786",
          light:"#AABBC2",
          extralight:"E1E8ED",
          lightest:"F5F8FA",
        },
        black:"#14171A",
      }
    },
  },
  variants:{
    extend:{},
  },
  plugins: [],
}