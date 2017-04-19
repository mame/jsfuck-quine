function f(Q){
  P={0:'[+[]]',m:'((+[])'+(C="['constructor']")+"+[])['11']"};
  for(R in B=
    (
      '![]@!![]@[][[]]@'+
      (A="[]['fill']")+
      "@([]+[])['fontcolor']([])@+('11e20')@(![]+[])['split']([])@"+
      A+C+"('return escape')()("+A+')'
    ).split('@')
  )
    for(E in D=eval(G='('+B[R]+'+[])'))
      P[T=D[E]]=P[T]||G+"['"+E+"']";
  for(G='[',B=0;++B<36;)
    P[D=B.toString(36)]=
      B<10?
        (G+='+!+[]')+']'
      :
        P[D]||"(+('"+B+"'))['to'+([]+[])"+C+"['name']]('36')";
  A+=C+"('eval(unescape(\"";
  Q='eval(Q='+JSON.stringify(Q)+')';
  for(E in Q)
    A+="'+![]+'"+Q.charCodeAt(E).toString(16);
  for(A+="\".replace(/'+![]+'/g,\"%\")))')()",R=0;R<9;R++)
    A=A.replace(/'.*?'/g,function(B){
      T=[];
      for(E=1;B[E+1];)
        T.push(P[B[E++]]);
      return T.join('+')
    });
  console.log(A)
}
f(f.toString().replace(/^ +| +$/mg, "").split("\n").slice(1, -1).join(""))
