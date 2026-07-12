interface Props{
title:string;
description:string;
emoji:string;
}

export default function DashboardCard({
title,
description,
emoji,
}:Props){

return(

<div className="rounded-3xl bg-white p-8 shadow hover:-translate-y-1 duration-300">

<div className="text-5xl">

{emoji}

</div>

<h2 className="mt-5 text-2xl font-bold">

{title}

</h2>

<p className="mt-2 text-stone-500">

{description}

</p>

</div>

);

}