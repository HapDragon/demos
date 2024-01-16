#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

#define SIGMA 5.0

float normpdf(in float x, in float sigma)
{
	return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec3 c = texture(iChannel0, fragCoord.xy / iResolution.xy).rgb;
    //fragColor = vec4(c, 1.0);
    //return;
    //declare stuff
    const int mSize = int(SIGMA * 11.0/7.0);
    const int kSize = (mSize-1)/2;
    float kernel[mSize];
    vec3 finalColor = vec3(0.0);

    //create the 1-D kernel
    float sigma = SIGMA;
    float Z = 0.0;
    for (int j = 0; j <= kSize; ++j)
    {
        kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);
    }

    //get the normalization factor (as the gaussian has been clamped)
    for (int j = 0; j < mSize; ++j)
    {
        Z += kernel[j];
    }

    //read out the texels
    for (int i=-kSize; i <= kSize; ++i)
    {
        for (int j=-kSize; j <= kSize; ++j)
        {
            finalColor += kernel[kSize+j]*kernel[kSize+i]*texture(iChannel1, (fragCoord.xy+vec2(float(i),float(j))) / iResolution.xy).rgb;

        }
    }

    finalColor /= Z*Z;

    finalColor = c + pow(finalColor, vec3(0.5)) * 0.5;


    fragColor = vec4(finalColor, 1.0);
}