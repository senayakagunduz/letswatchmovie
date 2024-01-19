import Header from "@/components/Header";
import Links from "@/components/Links";

export default function layout ({children}){
    return(
        <div>
            <Header/>
            <Links/>
            <main className="bg-slate-900 mx-auto pt-10 min-h-screen" >
                {children}
            </main>
        </div>
    )
}