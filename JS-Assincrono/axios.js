/* Axios é uma biblioteca HTTP client baseada em promessas que é usada tanto no browser quanto no node. Por padrão, ela já existe no browser sem necessidade de instalação. Já no node, pode ficar um pouco confuso dependendo da forma que é usado...
*/

import axios from "axios";

axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    console.log(res.data);
});