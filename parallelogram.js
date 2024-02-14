function parallelogram(){
    const base=inputValue('par-base')

    const height= inputValue('par-height')
    console.log(base,height)

    const area= base * height;
    console.log(area)

    const setAreas = setArea('par-span',area )
}