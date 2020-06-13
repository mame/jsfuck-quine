function f(Q){
  P={0:'[+[]]',m:'((+[])'+(C="['constructor']")+"+[])['11']"};
  for(R in B=
    (
      '!![]@![]@[][[]]@+[![]]@'+
      (A="[]['fill']")+
      "@([]+[])['fontcolor']([])@+('11e20')@(![]+[])['split']([])@([]+[])"+C+"@"+
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
  U='012ft3arNn4lud5s';
  A+=C+"('eval(unescape(\""+(Q='eval(Q='+JSON.stringify(Q)+')').replace(/./g,s=>U[(V=s.charCodeAt())>>4]+U[V&15]);
  for(A+="\".replace(/./g,(f,t)=>\"%\".slice(t<<31<0)+\""+U+"\".match(f).index.toString(16))))')()",R=0;R<9;R++)
    A=A.replace(/'.*?'/g,function(B){
      T=[];
      for(E=1;B[E+1];)
        T.push(P[B[E++]]);
      return T.join('+')
    });
  console.log(A)
}
var log = console.log.bind(console);
console.log = eval;
unescape = function (str) {
  var count = Array(17).join('0').split(''), lut = [];
  str.replace(/%/g, '').split('').forEach(c=>count[parseInt(c, 16)]++);
  count.map((...args)=>args).sort((a, b)=>b[0] - a[0]).forEach((a, i)=>lut[a[1]] = '012ft3arNn4lud5s'[i]);
  log(lut.join(''));
};
f(f.toString().replace(/^ +| +$/mg, "").split("\n").slice(1, -1).join(""))
