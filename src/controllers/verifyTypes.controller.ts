/**
 * Clase que se encarga si un objeto pertenece a una clase o interfaz
 * @template T Solo acepta interfaz o clases como tipado
 */
export default class VerifyTypes<T extends object> {
    /**
     * 
     * @param compareData Valor de inicializacion por defecto
     */
    constructor(private compareData: T) { }

    /**
    * Metodo que se encarga de verificar si el objeto pertenece a la interfaz o clase
    * @param objToCompare Valor a comparar, debe ser un objeto 
    * @returns Si el valor pertenece a la interfaz u objeto configurado, retornara true. Caso contrario false
    */
    verify(objToCompare: unknown): boolean {
        if (typeof objToCompare !== 'object' || objToCompare === null) return false;
        //En caso de ser un objeto y no ser nulo
        const keysCompare = Object.keys(this.compareData);
        const keysPayload = Object.keys(objToCompare)
        //Validamos las propiedades
        for (const key of keysPayload) {
            const findKey = keysCompare.find((keyC) => keyC === key);
            if (typeof findKey === 'undefined') {
                return false;
            }
        }
        return true
    }
}