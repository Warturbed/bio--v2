<template>
    <div class="popup">
        <div class="popup__background"></div>
        <div class="popup__content">
			<svg viewBox="0 0 43 52" class="popup__coin" v-show="!isRobotPopupVisible">
				<rect width="43" height="52" fill="url(#pattern0)"/>
				<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
				<use xlink:href="#image0" transform="translate(0 -0.00157629) scale(0.0163934 0.0135561)"/>
				</pattern>
				<image id="image0" width="61" height="74" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAABKCAYAAAAIRVyQAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAG19JREFUeJy1nFmPJceV338nIjPvVlVdvZHNRU1SlESNZGlkWNLA8AIYMuAv4Hc/Gn73B/TA8MxA9migjaJEi2ySzd6qu5Z7697cIuL44UTmzarulmYGcAKBu1TejPif/Zw4UaKPPuTPXuJAZPoFwAI4BN4B+RCRD4BvAW8At4E7wBIoQQJJa1LXoW2ka4Q+VNqEiiaU2gWnXWg0sEM5Bx4LnCB8CXyu8FDhS1VOFRqdrCRG0PyFTv5Qt1c/T6/izyN+6fJABRwDN4F7wNvAu8D9DPpuBl7l+xPQAQEkIk4QV+JcgXce7wTvepK2JM5QrTJRE9Da79gCMa+hn7z/J1//ONADyYzbS+CbwF9kkN8EfQflLnAPkSPgEKRgFA7xCAucB62gdOAiFAmqgHQB2nZG28+0jQvt41ITb5B4E+GbCCcqfAJ8CvwBeABsU/r/CdqQA1Qg74P+FPh3wEcYh1egHqTEOOte+rkoiFNUBFdAqUaTFCEEpClJu0ZVOo92x9qnQ1V9AyWIScl3FX4JHAgENeDtPw+0/glyybj2JSbO3wL9MfATkJ8A713hqKgNVaPRdZ0SEZyz57psJ1KCMoB3iC9EfCf4xlF3pXY9GpIJmnKEcAQsEA6AXwN/BM6A5p8G+qWVTS5Ng0jfBvkxyr8F/UvgG8CbiCsQsXscIAlIoNE4OD5aszF04Hy2g2IaqwLqwBXI3OP8DPUF6newjcSU0AiamOF4F8GLMeBt4G9V+QdVHv8zQcv1vzlMVI+Bfwn8B9CfgX4AZDFO+edZ4IigPaQAMWRQGbTL3HUeXGFTi7NpBPtbUSCFGhEFHErSGm0impKgHKmyEuENEd7K6wgYp9dMZvzToGNn73w5AT6wgreAHwE/Q/WnwAdmkGxRSDTx7COEBF0PoYfY2+dRxBWc5OGhLKEooCrsvSvysB9IVYAsAcGpQ3UHsUMTglIkuOUcHyFsUVrMmn+iyjMgduH17ipz+rXXAvgeys9A/z3ou0C113MFDRBb6ALUAXadve8jRL1Kc8FAezGwcw/LEmQGzM0WRGdExCNlBSuPS4LGRAoR7RIaFFVIsEL4DhBRokJMsEuJi/hneL0HrTror8+APwJ+Cvqvge+DlnZj5mDfQ2ihbqDuoIk2gu6FbLSDwmCNUKCL0Al0nb2vIizm4P3eyHmHiMMtl6gqPglJGzR0pKQIFJiIVwiisFNlrfCJQK9/wo/vQad+MDYzcB8g8mNUfwi8g0iJywgk2b1tA+sGLlvj8jCFc1B4KJxxz2XQCRP5qNAnaBPsAux2sAzGp+U8i7sCAVSQssAtjtBQ4IKSuoCmOGiNA47FGPQIeIhyCpxgev5Knl8Vb00C3AX5S+DfGIe5mf9o3Aod9C1salh3cBnNlBQOZhVUM5iVUHrw2YUhRpRejbNNB20LbTBChHacgpUY4QiQHLg5bl5BFFLXE9setEVjGrxtKY57wA8y2HOB3yI8wXT9JeQT0AIwQ/Ub5pb0R4i8CyzsZ8kC3W0NlzVcdsYtl3VzMYflCmYLKOcG2qX9sxOm631vKtHW0NXQNdAHk5pBNVLMRCssalOQWYlbLnF9QBLEpiWlZKGB4fgA4acoZ8A58Bzok75s1IoM1llExS3gfdBvo7yLsECwX8UAbW8cPm+hUxPjwyUcrGC5hMUhlEtwMyOGTpRb1fx3CLCqIdTQbmFzAZsttBFSm+1KglUJhZgLVEAcbl7h+wNiZ55CU7I/GW1XCB8BT1A+VfgEqF8j3imD5ibIt4Efgn4b9NhWkAF3LWx7Gx0gFSyWcHwEhwcwm0O5sO+T3/vvJPYq2XJ7gRmgBXRVFuUCNpfm7rYdEM2qezFPLAHxM9xsTpE8oYu4pia0EY2KJFClEMddhO8L/FbhY5QGW226Cjo1IIWAu4u474J8B/SmWRHMF4feDNamNy2ZVbA4gKMjODiE2dKMYK8Qa+NmCHs9JXuGYhgWgeGXsPLgKvPb67UZyF0ysNVgDJNFbIXDlQVFNSPMZkjTozGQkk7m4hbwgcJHKJcx8RRldxW0JtC+Qvw3wP8AcR8CS1BFVUjRXMu2t8UUM+Ps0U1Y3TAdlsJ0tcm62jcGeghRNRlRqhIW2S97D/gcoBRGCFUImchNgKoz2a0SOEvLpZjhq5JiviQ0vYUKfY+m0VHMRXhPlR+qchYjW+U6aKhAD0Hvo8nSRccCTUIYDE9vXJQCqhUsj+HgBsyX9l1Ipu+7BuraVEEVitJENA3ivQC9ATLPnOlywDKHucIyZuu+zdKV02anUM5Aegv3qwI3W+CqHm0TqQ9o0hwlshDhvirfBT5X5fMcqU1BuyPgJqr3kPQW6AEgaA4rm96stBQwX8Dy0ES7WBinQoC2g6a2UQcIYpwp5vZKJpi7BcVdk5Z0AXELsQNfWeyzODBieQf1xlxbkWDhjEDagHrEF0g1Q2ZLpG5RqUnZwYjgFI4R3lLlDREWcNWCF5DuY9WP+6jeQcShWLDQ9bDroXdQVjA/MLdULXKsjrmXrjX303bms6nMqM1WZuCSGqjZm1C+ZZY9dZaYpNoyLZmZbXDO1KHr7Hmtmj+vOtAdiiDFAX42p5hDV23BORJxiAQdcIjjXeB94E3g/2aDplmn433gHazMM0dz0pGSiVqrlvrNZxYxzSoTyRSzvlp2pcPnwpsULA6RwwNTgSSQCqhuQnkr++/KWDNkZa6055YlVJXpf+9snlah6GCuSOHALfFVia8UV5aIt2UkHUG7bNDeAt5UOBI4y6GpFmj4AHgXkTsgMhr3IWRMWJBQVQa88JZoBExfieSIIi+6MO6ulrBawXy1B+1WRhDt8rpy0pL6rGk51y4Ki+pCBakxj9EEKzE5jxQ93gu+LPBliXgPLpKChQKZbUvgDVXeVriLUGN+OxZo/AZwH+EOSDEEXyNo8VBUFmUVM9O3oJk7OZBQNZEcfLO4SbpY5IAjfyc+x0Fk0NEIpzETQjKRF5bBtdHihD6Hu7E1rvuELy0bk3IGPpJiIqnmyhSFwrEq9xTe1MQLoNFkOn0MHKMsAWeAMwNFjOpFmXXY50pHzAsuxuxJlKy7idHq9z34HFFFD74D6U2kmdRuh8R7rPSJ2ZA4t3tDyM/ACKC9PcdVSFki5QItIqlvSRpRBaeoLZgbCreSskqJ05TMT98GbiOsABPvHrPAUsJsZuLqyxyC58XJwN1pTSzZ32LmTuzNOg+g6YwIhKu/HepqaZINliWk5f4Zqcugo32mAylwRYUrD3BFBAnEDFotQq1EuKNwLyWOU7IkpEA5AI6yDvgRdC8mjuXcfKSbxM9jMVGvDmVChDQZahIyqML13w06lfIz3TB3Bd0MtDKCxGhEj9F8Nor3Fb5c4XyLyo40TGHx5FyEW2q6fYwFwH2BsgAWKOaDUhajkCscRWXiLZgei+RF5ledjDGJGwzDMF7xeSAI098On2UsJJifr0BbA55yBTWatDg3w5dz0+vsbXWvKTMRjoE7qtzIjB05vSKXoce5kRxQ5BoWZC4zkvIqZ181Bk6/SiqmwAdKD4QcvI7bV1GHbaWU9Vo6RHucn+PLCudL1DmrUmXty6BvmpHmplhFqCmwN9WVTNthoZ/IHtyeGntGD9+NHLuObQAnVxj5EsdlyvEJq7Ljxet+XZJVLHWIdHgX8d4j3o1p+xCRopTiWKIcCixFqIBiEO/Z6J81P7xg9CD7vHiSoemU0xOOXuf2FZGfcjrXx0cbMX02EMXUCfMxZK9ntIrmv12Hk4Qrsq8WMZXPthGlAJZiwckKA10VKLOBb1c4DTlymnJhmpZeBa261w9FkSsgXwF6qtfXQQ+pKOZ7jNOD1A2GrAU60wBfIs6jObbKzmXANBfbERns1lB1n6wt48Er+GT5NHEg/7WbNIO0qEwnursHnvK9iaugp5yOeZ5Bp8XGkGH5zOboMpcTaAB6RLJrdSWKGz3qMI2AE2GupsIe8MUVAzbQZphk3KoJ+4W+AjRE0miwjGuSx1XQ10e8NmTP5UGyRC30xVuhMOU4M2W1cA7nMmgproAeqtoizFSZqXG6LK5wWJmEjH4fZo6cvi4OZK4mVIeNNnOUTu17yRw0Ik/E/orVnhJHJ8QbLNLgRXpzWTkYkkHRXYFIyWCIkqYxJMigvSpFBl1cBT2AEW/uSiZJAcNCJvepY4zENKFqCxJVdOCUTjg9bvANI0xEPEykZ2JihurL4LZksPDD3x0yrrcgqYzRcNJxN0kyHzzg9qCHVycmSqP5HrgycSnDYgb/kLKepcE16T5cHUBfic7SXjfT1GZcl6YBNPs17AVsUnQ0X65qOh0HczHQx2WRyGnnHvTIRDHRHvzEaLWnfjQTJ7slyWCGcNxUUffgARnevxS4TN3WlPqTjzJI20TSUgatBtxWqUbHqVMY6AIqWbcKrs+lkgHnygjDZFMuyORVgYAjoHjT46mFZkgZX2XABgMZsYBfrs0znStfo69+mT4D4DAB7RI4MW82yOa1bZ38VClNR8bF9RPyDjMPC0rs+172rmnvrtLkt9ct9mArekylpqBTXku2LS5zNQ737Iky+mdVQtIx6ZjkNkmUJGITX9XpAfTI6WHynqvR1XVODyCmbJiCnN5zfZBfu1eA9nujSt7fGqVDxnWoKiklYorEAXRiGk/1IuR8lFDkyGJiRwbxLhjzXqY6d+3eST6tg9XOsiXkoCMpqsl0fyDGGLaSfz+13tjfZWDCLH/fM9bwxrUoqpGUhqGEYQqLc1ShRegkU60AuqvRYXZFeItbNKOcGrGBz5MEYY91Yp1VUB24mSxKG1lwRfyuSRJ7ty0e8bPM/DpbbEBMrCFNAMcrRiwngz3Wg9ZoNlAFiRroUUqbU0afZ8DN9ch10ANT8gRmRBRNiqSEpIggCCHfExANyGCpp3btOjVH0Jp3Qmb5loJx46CoQEpSEmLsiaEnxGiFlSFsMKu6U7gAtmri3ReQezaGIsI0j1aXxfWlCObKNWaCmdOiCUckqfWMGCQPGtGJ6X3tU6dMVzIDcgQ2fJY5MEfVEWMihmgVqrhvnVQloDSibFFqnej0DmiwwuBEZ4ZczoyIkl5azNgylkfKei3Z94pKjtISqoWBHiO26+J9DfQAU3LcLWkvFVKCW6FuSVRP6CN9Hwi9jpwWY0aX4EKUc1U2mcGdw6iwRTE2aLQya+psMn8A7gAr2bxigS9xZ6LTY1l1GIM8v4bHV56dsycpjfiKGbuYbC3uAOSAkEq6LtG2ka5LdL3dkmOhJkZOY+KZWlvGDmhcfrMFWhQ10DuINYJH3DHiboLMrhqx61wZKyk2BOO4jTS+GlFyDHVdjMdnDv55BlIiIpaxpSG29OAWJFkQYkHXJ9ou0XW5CJtG09sl5UITzxUuRKhF6AqsXeEQ2wYpicEjWwj2YCkPjdqpBi7tUUMGmBcqatJnVZ+IpD6HnzknHq1eLv++inDTmEOs14Rihcgs607uT0vJfLefozKjD5G6rql3NW0T6DvG7AqoVTlRxyOnnLpEK0IqsP7qI5QauDGKt7TW/urztmpfXhVvt1+4DEFATKA9GgIac/SUhtGBXmKFfr8n2quGd7Z9W6yM24kMOG/SiYAvURVCbOnaS9p6R9dG+hw8Oo/LEdiZKs9TYtPnTasC27utsG7eu2aNrNo4RuyutG4BKbEt032WOLgtSdmwpZcNng3H2PI99qBcAzsaKg/F0kCnAlJrXU1DAUFs3yuFRN/VNLsL2npH30Zib49PCXWOWuFUEqcIu2FVBcpnWM/VfeCDcXLpITYmVs6ZQStuQL9GUpctxX7BFhQ6xHkoPFL67O6deQRZIM7EVTRXHKdAGeYFZAHFMfgbaGyh30K/MeMolRHEz+k7x27Xcnlxye6ypuuiFQUTxEijynOErxGeKBPQqnyRle0Fw55lAmJE+gbipVlKt4LyTs4/To3q13IE8Q7n5jBb4WYLpPJIVRpoN0f8HaQ4sD2uwSK/VJTJDYvuCOQASQ3arZFwaZJXLsAvUZnTBaXeBXablmYXiFFRMRLHxGWCp8AzhLOMMXPamsVr4CuUCxI3xrCw30JzZgssD/OmGhAaCJdWax0kssSKdOUMWR4i80OkqKy9SnPnryywDuGtNcylqQU3PcUfQnkMzM1G9DtoN7aJV1ZoeQh+RR+Ebd2xvmhYX3TstuajscJJk5RHonyJ8gRhO9mEpsC67BR4rKbf94CClBx9A3IOfmab6dXSqB3WaGrzxloGPbeyI6WDRYVUczNCYca4ax4bNPbQXUC4YOwJT1j1tbyBzN+GMjcp9mdoe4b21qksxQKZHRB9RRs7drstl5uG7SbR1gy9uklhjYF+JNZBOFUiiszlNcpjlC9Q3ka4Ccw19IJGKJfIvEPkGKojNNxEtUW7tVllZ6ClAC0UqQK4AMGhMZ/XSAHVHk0NdOcQzhh30AXwJTK7Dcu3gBk0z6F+ijan5qZ8aXOXB/QKu3rDZn3B5aahrpWuM0F0jh54pvAF8NgJuzGEmIBOwA7lc+yMxF3ge6Dzsc7VbKA6zW5kBos3s0V/Ds0LSI3VyF1ApIa0tk30VKHYprxo7i9JW1ON1NjU1cwacua3YH7PxLtvoV1D/QK6nS24nMPiJjq7Sd0kzl6c8vzJCy7OtjQ7JYRc5XLsgM9F+aUkPkVYX0tGGcpFEXgiysfAB8B7wJ19NaiB+gkqCVm9g8zumCV3CwuQ2mek2EKfEC7Nx7s1mqZnWJJ5As0dgQCFIOUxsnwb5m+Y3dBoktCcQ7uzPQCH9X/PD0nVIfXFJWenW85OztmtG2LuAc+maIed4foY+CoJ9cugje2KNZB+jLmub2XdrgAh9LB7YYGFX5juDQtMLSrJFtq3OUCx3YfxuhJqi3U3eIdUS2RxF1m+A8Ut0BZtT2H7FOoL6IMZx1mJzg/AzahbODtvOXm84fTplt1lsiDNEsJWlQfA77GOonN4OUccamQRi78fofxe7ezTe8A9JO9ohmRNbcVTxJewuIO4Apb3oFoh3Rm0l2Z0YguptVxaU/bTVnsTX1o/SXmAVIfI7Jb53dRA/QLdPoHtc6i3FrGtKjg8hsWRBdIXa56fnPHiZMvFaaJvGOxCneALEr90wqfAea5+vnRNC4OagX8FfILyXub0HQY1CAF2J2jaQbxAlm8h8zvI7AZUt2F2Sep3aNxC2CLaM1ZQpMw2YQ7VAW5206RGQMMOds/R7VPYnkC9taS4EOtOOrhDdAdstg0nz7Y8f/KC9VlHUxtNC6sEPNfErxL8QhwPRYgDi+WafF+thgpBCh4S+XuNHOS//wA7QghR0aZBYmMirPkE4uyGAXAlUqwgrSA2iLYjaKSEYmGlHz+3ZliAbg31CVw+hssBsEVyspjD6hgtj9nUnidPz3j4+QlPvtqwPu/oOuubK4Q11vn7NwK/AB4P+vWqGsgetIAcAI6ttHxCw5zIHRXeRrk9jaW1B+odpMfQ17C8YzpeHYD3iD+AammcJoPG51aKwvxzdwrdBupTtL6A3dr6SntwpcBqAatjWNwgSMV60/PsyZbHX204PWloG6sUiMXXX4gdTvs18KVwNRh5tXgrVvGdAYGOwBNx/BLhTRJvIRzhuQmUmrDGjjag/Qtoz23M78DyLlIuDVwx9IpZQ5woEO38Bd0W7U6Mw/W5NdP2EYJagDGfwfKIND+mi3MuNj2PHm34+osNzx7VXJ4nnEO951IcD1T53wj/R+APKBevA7sHPd0tGGLhEuWIE+AX0rAiICT+BYH3pcelnnz4jJy1nxv3QzB/6vO5KxnCNRj2vTQC7c6sfXtu/d296Z2UYi1ch0dwcESnc07OAo8fb3jw6QVPv96yXSdCD/M5TVXxuXf83Dn+B8KvgBMS++3414GWb+V3LnN7yPNLIgUPeEHC582vntsotyROvFAin8NaQ1ejPncFedkn2yL7rCzm+4dDazGnpRWwnMHyAFZHxGLB+gIeP97w+aenfPXZhs15ZzlHSSwKTkrPb8TztwI/LxyPgCCFHf94TUHKQP+3/z75pPDmHfiv/xluHpOaOevZMz45OcEf3kAOVkjp+B4Vx+I5BCrbe1cLR5tuX0+Ua2O64THmzYAXZGa+mMWSUC7ZtQXri8ijJw0P/njO1w/OOX3apRjoRLgUx5d95HdNz183PX+3nPHZvCDGZJryvz7OpbTXXK8UhMUc/uoH8OmX8F/+E9w+5OgvPuD9v/oeP7p1l39Fwfcp+S7CPQKe3P4xNhfrtRmuFwoGQpTAwsNiAdWC5Oas25JnL+DJ08Cjr2ueP96xvdix3WirysOg/CEo/9AHfvViw29Ozvly27D59eewy731IfInL/+qL0OAB4/sEM3f/Bqajv5gxovDOY+WFRtnpfGVKjPtmedOCx2KCS8Rc1o8zMdWddgum1kfeWDJRV3y5EXiswc7/ezTNV9+ttHzF72GoCElHkblN3XP/7ys+evNjr9/es7DL57S/P4rOzU1dmH9metVZy2nAupiIv38d4SHz0ifPeLpf/wJv717h+L4BkTlxCsfHi25e3PB4mjOQeGZIfgrG5vDq2TEYgdSepS2K2h74aJOnJx3PHna8uWDun/y9a578Sztupat85xH+Dgqv9q1/HzT8LvNjpM/PjbGNP2IY1qLeS3866AnvNi3I9Qd6eSc8Hcf408v6d57i89u30C7nifzksfv3+P9j97l3vtv8u7BnBtFyVI8/ir5yGnQjJAK2qTUbeR0K5xvA09fRE5OIi+et/3J036z3qSLTc3jy5rHdc+juuN3feTTpuery5ruYsvqska7MCrLYC2mVuOVwK/r9HTLsmQ8J22FIRE4WhLuv4HeXHHY9txezHnvO+/yzR98yP3v3OfDowV35hU3VzNueKEUj1OHBIcGV0liQR1L6j5xuQucnCaen6JPn8Vwdtq3u3VYby551kee73q+3Oz4YtPwcNvweYg86wKbXUsKgZnuTeSwhxsn71+7q/AqTg+jmHC7ALwqcrElPnhCelaRQmRdlTxc7wgnay7+8JDz5Zw7VcGteckNL8zFUajDBYckSZKI0kboQmJXR724SPFio2l9Hpu6jnXo2XQdz5LyvI08rnue1C2nbc86KRoT8xjH9Q2RxcDVoYL+Wi6/itPTHflqAnzoV7KjZM64DkQR/HLO4mjJ4eGC22XJcem5UXgOPcwQKhV8ElwS55SSkE8/dV1KbZ1i26TQd9oo2ojjUpWzmDjrk52rCpEuJQLY5unU409er7//R3N6uK5vpI6eV63SOJYXELqmIzixf19QFnSFoy48G7Em83IArWIN9zHl5v9OU9to7DsNKWiLo3WeHcJFTKxDYhMjTUpjxjTUXwfQ4dpa/8RG2f76fyGqL1DOi8NLAAAAAElFTkSuQmCC"/>
				</defs>
			</svg>
			<button class="popup__close" @click="closePopup">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M7.05024 5.63604L5.63603 7.05025L10.5858 12L5.63603 16.9497L7.05024 18.364L12 13.4142L16.9497 18.364L18.3639 16.9497L13.4142 12L18.3639 7.05025L16.9497 5.63604L12 10.5858L7.05024 5.63604Z" fill="#FF7F22"/>
				</svg>
			</button>
			<div class="popup__container">
				<p class="popup__title" v-if="!isRobotPopupVisible">Количество монет ограничено</p>
				<p class="popup__title" v-else>Биоробот произведён</p>
				<p class="popup__text" v-if="!isRobotPopupVisible">Вы не можете нацыганить более 100 монет biorobo</p>
				<p class="popup__text" v-else>Поздравляем! <br>Вы произвели биоробота</p>
			</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Popup',
  props: {
    isRobotPopupVisible: Boolean
  },
  methods: {
    closePopup() {
        this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
.popup {
	&__background {
		z-index: 999;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #1a1a1a;
		opacity: 0.67;
	}
	&__content {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background: var(--main-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		width: 496px;
		height: 240px;
		z-index: 9999;
		@media (max-width: 767px) {
			width: 236px;
			height: 210px;
			text-align: center;
		}
	}
	&__title {
		font: 600 32px/40px var(--font-family);
		@media (max-width: 767px) {
			font: 600 18px/24px var(--font-family);
		}
		color: #212529;
		max-width: 320px;
	}
	&__text {
		display: inline-block;
		font: 600 20px/32px var(--font-family);
		@media (max-width: 767px) {
			font: 600 14px/20px var(--font-family);
			margin-top: 10px;
		}
		color: #4c5865;
		max-width: 320px;
		margin-top: 23px;
	}
	&__coin {
		position: absolute;
		@media (max-width: 767px) {
			position: static;
			margin-bottom: 5px;
		}
		top: 50px;
		left: 25px;
		width: 43px;
		height: 52px;
	}
	&__close {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 10px;
		right: 10px;
		width: 32px;
		height: 32px;
		background: transparent;
		cursor: pointer;
	}
}
</style>