const getCakes = Promise.resolve(['vanilla', 'chocolate']);
const getFrosting = Promise.resolve(['buttercream', 'meringue']);

//removes the nested calling by using await to syncronusly make calls
const AsyncBakery = async () => {
  const cakes = await getCakes;  //waits untill getCakes finishes then moves on
  console.log(cakes)
  const frosting = await getFrosting;
  console.log(frosting);
}

const PromiseBakery = () => {
  getCakes.then(cakes => {
    getFrosting.then(frosting => {
      console.log(`Promise:  ${cakes}`);
      console.log(`Promise:  ${frosting}`);
    })
  })
}

const main = () => {
  AsyncBakery();
  PromiseBakery();
  console.log('reached last line');
}
main();

