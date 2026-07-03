import subprocess

for i in range(6, 16):
    app_name = f"my-{i}-app"

    print(f"Creating {app_name}...")

    subprocess.run(
        [
            "npm.cmd",
            "create",
            "vite@latest",
            app_name,
            "--",
            "--template",
            "react",
        ],
        check=True,
    )

print("Done!")