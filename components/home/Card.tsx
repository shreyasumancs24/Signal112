interface CardProps{
title:string;
description:string;
}

export default function Card({
title,
description
}:CardProps){

return(

<div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-red-500 transition">

<h3 className="text-xl font-semibold text-white">
{title}
</h3>

<p className="text-slate-400 mt-3">
{description}
</p>

</div>

);

}