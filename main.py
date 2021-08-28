

from jinja2 import Environment, FileSystemLoader
from util import copytree
import os

targetName = "Market" # this variant is our target module name

path = './templates'
targetLowerName = targetName.lower()
directory = "./"+targetLowerName

if not os.path.exists(directory):
    os.makedirs(directory)

copytree(path, directory)
files = []

# r=root, d=directories, f = files
for r, d, f in os.walk(path):
    for file in f:
        # files.append(file)
        files.append(os.path.join(r, file))

# for f in files:
#     f = f[len(path)+1:]
#     print(f)
# for f in files:
#     print(f)
# datas = [f[len(path)+1:] for f in files]
# print(datas)

# render files
env = Environment(loader=FileSystemLoader('templates'))
for f in files:
    f = f[len(path)+1:]
    print(f)
    template = env.get_template(f)
    output_from_parsed_template = template.render(
        name=targetLowerName, Name=targetName)
    print(output_from_parsed_template)

    # to save the results
    with open(directory+"/"+f, "w") as fh:
        fh.write(output_from_parsed_template)

# rename files
for r, d, f in os.walk(directory):
    for file in f:
        # files.append(file)
        if ('Quote' in file):
            full_path = os.path.join(r, file)
            target_path = os.path.join(r, file.replace('Quote', targetName))
            os.rename(full_path, target_path)
        # full_path = os.path.join(r, file)
        # files.append(os.path.join(r, file))

# if __name__ == "__main__":
#     # copytree("./templates", "./test")
#     loopTree('./templates')
