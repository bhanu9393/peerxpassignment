const Monthly = (action, count) => {
  console.log(action);
  action?.map((element, index) => {
    switch (new Date(element.published_at).getMonth() + 1) {
      case 1:
        console.log(new Date(element.published_at).getMonth() + 1);

        count[0] = count[0] + 1;
        break;

      case 2:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[1] = count[1] + 1;
        break;

      case 3:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[2] = count[2] + 1;
        break;

      case 4:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[3] = count[3] + 1;
        break;

      case 5:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[4] = count[4] + 1;
        break;

      case 6:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[5] = count[5] + 1;
        break;

      case 7:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[6] = count[6] + 1;
        break;

      case 8:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[7] = count[7] + 1;
        break;

      case 9:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[8] = count[8] + 1;
        break;
      case 10:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[9] = count[9] + 1;
        break;
      case 11:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[10] = count[10] + 1;
        break;
      case 12:
        console.log(new Date(element.published_at).getMonth() + 1);
        count[11] = count[11] + 1;
        break;
    }
  });
  return count;
};
export default Monthly;
