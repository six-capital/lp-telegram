export default ({store, app: { $axios }}) => {
    $axios.setToken(process.env.token, 'Bearer');
}