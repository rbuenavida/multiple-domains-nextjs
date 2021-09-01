import dealers from './dealers.json'

const getByDomain = domain => {
    return dealers.find(dealer => dealer.domains.indexOf(domain) >= 0)
}

export {
    getByDomain
}

export default {
    getByDomain
}