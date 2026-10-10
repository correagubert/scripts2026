def calc_median(a, b, c):
    median = (a + b + c) / 3

    return median
def verify_sit(median):
    if median >= 7.0:
        return "Aprovado."
    else: return "Reprovado."