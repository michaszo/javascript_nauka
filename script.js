function count_to_x_and_then_to_zero(x) {

    let flag = 0;
    let i = 0;

    setInterval(() => {

        if (i >= x) {
            flag = 1;
        }
        if (i <= 0) {
            flag = 0;
        }

        if (flag == 0) {
            i++;
        } else {
            i--;
        }

        console.log(i);

    }, 1000);

}

function count_to_x(x) {
    let i = 0;

    setInterval(() => {
        console.log(++i);
        if (i >= x) {
            i = 0;
        }
    }, 1000);
}

// count_to_x_and_then_to_zero(10);
count_to_x(10);