
import { themeGenerator } from "./theme";



export default {
  // Prevent preflight rules to be added into sheet
  preflight: false,
  // Do not prefix properties and values
  prefix: false,
  theme: themeGenerator()
}