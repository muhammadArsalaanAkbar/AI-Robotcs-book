```markdown
# Appendix: Hardware Reference Guide

This appendix provides a quick reference to the key hardware components discussed and utilized throughout the book "Physical AI & Humanoid Robotics: From Simulation to Reality."

## 1. Simulation & Development Workstations

### NVIDIA RTX Simulation Workstations

*   **Description**: High-performance personal computers equipped with NVIDIA RTX GPUs. These workstations are crucial for running demanding simulations in NVIDIA Isaac Sim and other physics-based environments, as well as for training local AI models.
*   **Key Features**: Advanced rendering, real-time ray tracing, and AI acceleration capabilities provided by RTX GPUs.
*   **Relevance**: Primary platform for high-fidelity digital twin development and complex physics simulations.

## 2. Edge AI Development Kits

### NVIDIA Jetson Orin Nano / Jetson Orin NX

*   **Description**: Compact, powerful embedded systems designed for AI at the edge. The Jetson Orin Nano and NX modules offer significant AI inference capabilities in a small form factor, ideal for deploying robotic perception and control systems on physical robots.
*   **Key Features**: Integrated NVIDIA GPU for accelerated AI workloads, extensive I/O for sensors and actuators.
*   **Relevance**: Target deployment platform for Isaac ROS modules and running ROS 2 nodes on physical humanoid robots.

## 3. Robotic Sensors

### Intel RealSense D435i / D455 Depth Cameras

*   **Description**: Stereo depth cameras providing RGB, depth, and infrared streams. The 'i' variants include an Inertial Measurement Unit (IMU).
*   **Key Features**: High-resolution depth sensing, built-in IMU for improved localization and mapping (D435i), wide field of view.
*   **Relevance**: Essential for environmental perception, object detection, Visual SLAM (VSLAM), and generating synthetic data in simulations.

### IMUs (e.g., Bosch BNO055)

*   **Description**: Inertial Measurement Units combine accelerometers, gyroscopes, and magnetometers to provide orientation, angular velocity, and linear acceleration data.
*   **Key Features**: Provides crucial state information for robot localization, balance control, and motion tracking.
*   **Relevance**: Critical for humanoid robot balance, locomotion stability, and general state estimation.

## 4. Humanoid Robots for Research and Development

### Unitree Go2 / Unitree G1

*   **Description**: Advanced quadruped (Go2) and bipedal humanoid (G1) robots from Unitree Robotics. These platforms are used for locomotion research, manipulation, and physical AI experiments.
*   **Key Features**: Highly articulated joints, advanced motor control, robust construction for dynamic tasks.
*   **Relevance**: Examples for real-world humanoid locomotion, manipulation, and control experiments. Go2 can serve as a stepping stone to bipedal control concepts.

### TonyPi Pro Humanoid Robot

*   **Description**: A smaller, open-source humanoid robot platform, often used for educational purposes and basic manipulation tasks.
*   **Key Features**: Multi-DOF arms and legs, relatively affordable for hands-on learning.
*   **Relevance**: Excellent for teaching fundamental humanoid manipulation, inverse kinematics, and basic interaction.

## 5. Cloud Simulation Environments

### AWS g5/g6e Instances

*   **Description**: Amazon Web Services (AWS) EC2 instances featuring NVIDIA GPUs (e.g., A10G, L4). These instances provide scalable cloud-based computing power for large-scale simulations and AI model training.
*   **Key Features**: On-demand access to powerful GPUs, elastic scalability, integration with other AWS services.
*   **Relevance**: For running compute-intensive Isaac Sim simulations, large-scale synthetic data generation, and remote development when local RTX workstations are unavailable or insufficient.
```