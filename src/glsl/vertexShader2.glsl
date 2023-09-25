#version 120

uniform vec2 uOffset;

varying vec2 vUv;

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
    float M_PI = 3.1415926535897932384626433832795;
    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
    position.y = position.y + (sin(uv.x * M_PI) * offset.y);
    return position;
}

void main() {
    vUv =  uv + (uOffset * 2.);
    vec3 newPosition = position;
    newPosition = deformationCurve(position,uv,uOffset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}
