function makeAttributes(obj){
    const recur = Object.entries(obj)
    let constructed = ""
    recur.forEach(element => {
      constructed = constructed + element[0] + '="' +element[1].replace(/"/g, "&quot;")+ '" '
    })
    return constructed
}

class Element{
    constructor(name, content = [], attributes = {}){
        this.name = name
        this.content = content
        this.attributes = attributes
    }
    querySelectorAll(query){
        if(query.split("")[0] == "#"){
            const queryF = query.replace(/#/g, "")
            return this.content.filter(element => element.attributes.id == queryF)
        }else if(query.split("")[0] == "."){
            const queryF = query.replace(/\./g, "")
            return this.content.filter(element => element.attributes.class == queryF)
        }else{
            return this.content.filter(element => element.name == query)
        }
    }
    querySelector(query){
        return this.querySelectorAll(query)[0]
    }
    push(element){
        this.content.push(element)
    }
    render(){
        if (typeof this.content == "string") {
            return `<${this.name} ${makeAttributes(this.attributes)}>${this.content}</${this.name}>\n`
        }else{
            return `<${this.name} ${makeAttributes(this.attributes)}>\n${this.content.map(element => {
                return element.render()
            }).join("")}</${this.name}>\n`
        }
    }
}

class Ball{
    constructor(name, attributes = {}){
        this.name = name
        this.attributes = attributes
    }
    render(){
        return `<${this.name} ${makeAttributes(this.attributes)}>\n`
    }
}


exports.Element = Element
exports.Ball = Ball