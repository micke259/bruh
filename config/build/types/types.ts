export interface buildPaths{
	entry: string
	html:string
	output:string
}
export type BuildMode = 'production' | 'development';



export interface buildOptions{
	port:number
	paths:buildPaths
	mode: BuildMode
}