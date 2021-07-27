const incrementar = () => {
    return {
        type:'INCREMENTAR'
    }
}

const decrementar = () => {
    return {
        type: 'DECREMENTAR'
    }
}

export default {
    incrementar,
    decrementar
}